
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
        // console.log(this.boards)
    }

    findBoardByName() {
        return this.boards.pop()
    }   
    
}


class Board{
    constructor(name) {
        // console.log(name)
        this.article = [];
        this.name = name;

        if(this.name === "" || this.name === null) {
            throw new Error();
        }
    }

    publish(article) {
        if (this.tr) {
            article.tr = true
            article.id = `${this.name}-${Math.random()}`
            article.createdDate = new Date().toISOString();
            this.article.push(article);
            // console.log(this.article)
        } else throw new Error();
    };
    
    getAllArticles() {
        return this.article
    }
}


class Article {
    constructor(articles) {
        this.comment = [];
        if(!articles) {
            return
        }
        
        if( articles.subject === "" || articles.subject === null ||
            articles.content === "" || articles.content === null || 
            articles.author === "" || articles.author === null) { 
                throw new Error();
                
        }
        
    }
    

    reply(comment) {
        if(this.tr) {
            comment.tr = true
            comment.createdDate = new Date().toISOString();
            this.comment.push(comment);
            // console.log(this.comment)
        }else throw new Error();
    
    }
    getAllComments() {
        return this.comment
    }
}


class Comment{
    constructor(comment) {
        // console.log(comment)
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
