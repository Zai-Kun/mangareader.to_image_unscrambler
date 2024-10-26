import math

from PIL import Image

from random_value_gen import RandomSeededGenrator


class ShufImage:
    def __init__(
        self, img_path: str, tile_size: int = 200, seed=[115, 116, 97, 121]
    ) -> None:
        self.img = Image.open(img_path)
        self.img_size = self.img.size
        self.tile_size = tile_size
        self.tiles, self.total_tiles, self.tiles_per_row = self.calculate_tiles()

        self.seed = seed

    def calculate_tiles(self) -> tuple[dict[str, list[dict[str, int]]], int, int]:
        img_width, img_height = self.img_size

        total_tiles = math.ceil(img_width / self.tile_size) * math.ceil(
            img_height / self.tile_size
        )
        tiles_per_row = math.ceil(img_width / self.tile_size)

        tiles = {}
        for i in range(total_tiles):
            row = i // tiles_per_row
            tile = {
                "x": (i - row * tiles_per_row) * self.tile_size,
                "y": row * self.tile_size,
            }

            tile["width"] = (
                self.tile_size
                if (tile["x"] + self.tile_size <= img_width)
                else (img_width - tile["x"])
            )
            tile["height"] = (
                self.tile_size
                if (tile["y"] + self.tile_size <= img_height)
                else (img_height - tile["y"])
            )

            key = f"{tile['width']}-{tile['height']}"
            if key not in tiles:
                tiles[key] = []
            tiles[key].append(tile)

        return tiles, total_tiles, tiles_per_row

    def unshuffle_tiles(self, tiles_len: int) -> list[int]:
        unshuffled_array: list[None | int] = [None] * tiles_len
        available_indices = list(range(tiles_len))
        r = RandomSeededGenrator(self.seed)
        for i in range(tiles_len):
            random_index = math.floor(r.generate() * (len(available_indices)))
            target_index = available_indices.pop(random_index)
            unshuffled_array[target_index] = i

        return unshuffled_array  # type:ignore

    def shuffle_image(self, unshuffle=False) -> Image.Image:
        unshuffled_image = Image.new("RGB", self.img_size)
        for _, value in self.tiles.items():
            unshuffled_tiles = self.unshuffle_tiles(len(value))
            for i, j in enumerate(unshuffled_tiles):
                place_at = value[j if not unshuffle else i]
                place_from = value[i if not unshuffle else j]
                crop_box = (
                    place_from["x"],
                    place_from["y"],
                    place_from["x"] + place_from["width"],
                    place_from["y"] + place_from["height"],
                )
                croped_image = self.img.crop(crop_box)
                unshuffled_image.paste(croped_image, (place_at["x"], place_at["y"]))
        return unshuffled_image

    def unshuffle_image(self) -> Image.Image:
        return self.shuffle_image(unshuffle=True)


if __name__ == "__main__":
    img = ShufImage("shuffled.jpg")
    img.unshuffle_image().save("unshuffled.jpg")
