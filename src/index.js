class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(noticeBoard) {
        if (this.boards.find((a) => a.name === noticeBoard.name)) {
            throw new Error();
        };
        noticeBoard.tr = true
        this.boards.push(noticeBoard);
    }

    findBoardByName() {
        return Object(this.boards)[0]
    }   
}

class Board extends Site {
    constructor(name) {
        super()
        this.article = [];
        this.name = name;

        if(this.name === "" || this.name === null) {
            throw new Error();
        }
        
        
        //Article은 독립적인 글을 작성할 때 사용한다.

    }
    publish(article) {
        if (this.tr) {
            article.tr = true
            article.id = `${this.name}-${Math.random()}`
            article.createdDate = new Date().toISOString();
            //iso => parseInt(new Date(iso).getTime() / 1000);
            this.article.push(article);
        } else throw new Error();
        
        console.log(this.boards)
    };

    
    getAllArticles() {
        return Object(this.article)
    }
}





class Article extends Board {
    constructor(article) {
        super();
        // this.subject = subject;
        // this.content = content;
        // this.author = author;
        this.comment = [];

        // if ( !article.subject || !article.content || !article.author ) {
        //     throw new Error();
        // }
        
        // if( article.subject === "" || article.subject === null || 
        //     article.content === "" || article.content === null ||
        //     article.author === "" || article.author === null) { 
        //         throw new Error();
        // }

    }
    reply(comment) {
        if(this.tr) {
            comment.tr = true
            comment.createdDate = new Date().toISOString();
            this.comment.push(comment);
        }else throw new Error();

    
    }
    getAllComments() {
        return Object(this.comment)
    }
}

class Comment extends Article{
    constructor(comment) {
        super();
        if( comment.content === "" || comment.content === null ||
            comment.author === "" || comment.author === null) {
                throw new Error();
            }
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
