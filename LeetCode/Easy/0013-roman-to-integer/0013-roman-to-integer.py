class Solution:
    def romanToInt(self, s: str) -> int:
        answer = 0
        values = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
        n = len(s)

        for i, sym in enumerate(s):
            if i + 1 < n and sym == "I" and (s[i + 1] in ("V", "X")):
                answer -= values[sym]
            elif i + 1 < n and sym == "X" and (s[i + 1] in ("L", "C")):
                answer -= values[sym]
            elif i + 1 < n and sym == "C" and (s[i + 1] in ("D", "M")):
                answer -= values[sym]
            else:
                answer += values[sym]

        return answer
