import java.util.*;

class Solution {
    public boolean solution(String[] phone_book) {
        Arrays.sort(phone_book);
        
        // 방법 1
        // for (int i = 0; i < phone_book.length - 1; i++) {
        //     if (phone_book[i + 1].startsWith(phone_book[i])) {
        //         return false;
        //     }
        // }
        
        // 방법 2
        for (int i = 0; i < phone_book.length - 1; i++) {
            if (phone_book[i].length() < phone_book[i + 1].length() &&
               phone_book[i].equals(phone_book[i + 1].substring(0, phone_book[i].length())))
                return false;
        }
        
        return true;
        }
    }