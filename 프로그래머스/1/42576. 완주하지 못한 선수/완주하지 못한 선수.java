import java.util.*;

class Solution {
    public String solution(String[] participant, String[] completion) {
        
        HashMap<String, Integer> nameMap = new HashMap<>();
        
        for (String p : participant) {
            nameMap.put(p, nameMap.getOrDefault(p, 0) + 1);
        }
        
        for (String c : completion) {
            if (nameMap.containsKey(c)) {
                nameMap.replace(c, nameMap.get(c) - 1);
            }
        }
        
        for (Map.Entry<String, Integer> entry : nameMap.entrySet()) {
            if (entry.getValue() > 0) {
                return entry.getKey();
            }
        }
        
        return "";
    }
}