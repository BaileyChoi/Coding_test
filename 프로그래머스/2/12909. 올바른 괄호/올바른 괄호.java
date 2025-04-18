import java.util.*;

class Solution {    
    boolean solution(String s) {
        Stack<Character> stack = new Stack<>();
        
        for (int i = 0; i < s.length(); i++) {
            Character c = s.charAt(i);
            
            if (c.equals('(')) {
                stack.push(c);
            } else {
                if (!stack.empty() && stack.peek().equals('(')) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }
        return stack.empty();
    }
}