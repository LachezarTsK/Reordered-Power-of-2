
import java.util.Arrays;

public class Solution {

    public boolean reorderedPowerOf2(int input) {

        int[] digitsFrequencyForInput = createArrayDigitsFrequency(input);
        int powerOfTwo = 1;

        for (int i = 1; i < 31; ++i) {
            if (Arrays.equals(digitsFrequencyForInput, createArrayDigitsFrequency(powerOfTwo))) {
                return true;
            }
            powerOfTwo <<= 1;
        }
        return false;
    }

    private int[] createArrayDigitsFrequency(int n) {
        int[] digitsFrequency = new int[10];
        while (n > 0) {
            ++digitsFrequency[n % 10];
            n /= 10;
        }
        return digitsFrequency;
    }
}
