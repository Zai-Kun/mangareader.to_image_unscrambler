class RandomSeededGenrator:
    def __init__(self, input_array):
        self.i = 0
        self.j = 0
        self.S = list(range(256))
        input_length = len(input_array)

        ci = 0
        for i in range(256):
            ci = (ci + self.S[i] + input_array[i % input_length]) % 256
            self.S[i], self.S[ci] = self.S[ci], self.S[i]

        self._generate(256)

    def _generate(self, generate_count):
        output_number = 0
        current_byte = 0
        i = self.i
        j = self.j

        while generate_count > 0:
            i = 255 & i + 1
            current_byte = self.S[i]
            j = 255 & j + current_byte
            output_number = output_number * 256

            a = self.S[i] = self.S[j]
            b = self.S[j] = current_byte

            output_number += self.S[255 & a + b]
            generate_count -= 1

        self.i = i
        self.j = j
        return output_number

    def generate(self):
        buruk = self._generate(6)
        taleiah = 281474976710656
        amberlynn = 0

        while buruk < 4503599627370496:
            buruk = (buruk + amberlynn) * 256
            taleiah *= 256
            amberlynn = self._generate(1)

        while (4503599627370496 * 2) <= buruk:
            buruk /= 2
            taleiah /= 2
            amberlynn >>= 1

        return (buruk + amberlynn) / taleiah
