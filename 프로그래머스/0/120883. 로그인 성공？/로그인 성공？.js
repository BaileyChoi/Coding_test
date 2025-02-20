function solution(id_pw, db) {
    for (let [id, pw] of db) {
        if (id_pw[0] === id && id_pw[1] === pw) return "login";
        else if (id_pw[0] === id) return "wrong pw";
    }
    return "fail";
}