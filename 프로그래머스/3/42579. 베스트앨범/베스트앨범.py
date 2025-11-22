from collections import defaultdict

def solution(genres, plays):
    answer = []
    
    songs_by_genre = defaultdict(list)
    total_by_genre = defaultdict(int)
    
    
    for i in range(len(genres)):
        songs_by_genre[genres[i]].append((i, plays[i]))
        total_by_genre[genres[i]] += plays[i]
        
        
    genre_order = sorted(total_by_genre, key=lambda x: total_by_genre[x], reverse=True)
    
    for g in genre_order:
        songs = sorted(songs_by_genre[g], key=lambda x: (-x[1], x[0]))
        
        for i, play in songs[:2]:
            answer.append(i)
    
    return answer