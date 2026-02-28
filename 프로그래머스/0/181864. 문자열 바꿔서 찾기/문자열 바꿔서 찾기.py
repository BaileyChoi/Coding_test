def solution(myString, pat):
    myString = myString.replace('A', 'T')
    myString = myString.replace('B', 'A')   
    myString = myString.replace('T', 'B')
    
    return int(pat in myString)