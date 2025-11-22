class Solution:
    def romanToInt(self, s: str) -> int:
        answer = 0
        values = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
        n = len(s)

        for i, sym in enumerate(s):
            if i + 1 < n and values[sym] < values[s[i + 1]]:
                answer -= values[sym]
            else:
                answer += values[sym]

        return answer
