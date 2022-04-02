class Site {
    constructor(text) {
        this.boards = [];
    }

    addBoard(noticeBoard) {
        if (this.boards.find(() => text === noticeBoard)) {
            throw new Error();
        };
        this.boards.push(noticeBoard);
        console.log(noticeBoard)
    }

    findBoardByName() {
        return Object(this.boards)[0]
    }   
}

class Board {}

class Article {}

class Comment {}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
