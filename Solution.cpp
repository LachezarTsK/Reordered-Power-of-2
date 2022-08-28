
#include <array>
using namespace std;

class Solution {
    
public:
    bool reorderedPowerOf2(int input) {
        
        array<int, 10> digitsFrequencyForInput = createArrayDigitsFrequency(input);
        int powerOfTwo = 1;

        for (int i = 1; i < 31; ++i) {
            if (digitsFrequencyForInput == createArrayDigitsFrequency(powerOfTwo)) {
                return true;
            }
            powerOfTwo <<= 1;
        }
        return false;
    }

private:
    array<int, 10> createArrayDigitsFrequency(int n) {
        array<int, 10> digitsFrequency{};
        while (n > 0) {
            ++digitsFrequency[n % 10];
            n /= 10;
        }
        return digitsFrequency;
    }
};
