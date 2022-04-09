class Site {// Site = 클래스 함수
    constructor() {
        this.boards = [];//this.는 지역변수, this.속성명 = 매개변수 = 속성값
    }
    //생성자 함수안에 새로운 객체를 만들 때 new를 붙여 실행하게 되는데 이 때 
    //this = {}, return this; 이 방식으로 실행이 된다
    //그래서 아래에 this.boards를 console.log로 찍어내게 되면
    //[ Board {boards:[], article:[], name: '공지사항', tr: true }] 이러한 배열이 나온다.

    
    addBoard(noticeBoard) { //함수: addBoard, 매개변수(속성 및 *메서드*): naoticeBoard 

        if (this.boards.find((a) => a.name === noticeBoard.name)) {//메서드 함수에 조건을 넣어준다.
            throw new Error();//임의에 값 a.name이 noticeBoard.name이랑 같으면 에러
        };//noticeBoard라는 매개변수로 할당해줄 값
        
        noticeBoard.tr = true//그게 아니면 이 메서드는 true를 반환하고 
        //[ Board {boards:[], article:[], name: '공지사항', tr: true },
        //Board {boards:[], article:[], name: '공지사항', tr: true }]
        
        this.boards.push(noticeBoard);//boards라는 배열에 push한다
    }

    findBoardByName() {
        // console.log(this.boards)
        return Object(this.boards)[0]//추가된 Board를 조회 해야하기 때문에
        //this.boards[0]를 리턴
    }   
    
}

class Board extends Site {
    constructor(name) {//생성자(속성 값)
        super()//상속할 때 사용하는데 정확한 사용의도를 모르겠음
        this.article = [];//article이라는 새로운 배열을 만들어준다.
        this.name = name;//[Board {name: name}]

        if(this.name === "" || this.name === null) {//name은 ""이거나 null과 같을 때
            throw new Error();//Error를 던져준다.
        }
        
        

    }
    publish(article) { //함수: publish, 매개변수(속성 및 *메서드*): article => this.article[] 
        if (this.tr) {//조건이 this.tr : ture 일 때
            article.tr = true //article.tr에 ture 값을 할당
            article.id = `${this.name}-${Math.random()}`//this.name에 랜덤 값을 부여
            article.createdDate = new Date().toISOString();//현재 시간을 ISO라는 국제 표준 시간으로 바꿔준다.
            //iso => parseInt(new Date(iso).getTime() / 1000);//
            this.article.push(article);//this.article에 article값을 push
        } else throw new Error();//ture가 아닐경우 Error
        
        // console.log(this.boards)
    };

    
    getAllArticles() {
        console.log(this.article)
        return Object(this.article)//article전체 목록을 조회 해야하기 때문에 위에 코드처럼
        //index번호가 필요 없음
    }
}
//console.log(this.article)
//[
    // Article {
    //     boards: [],
    //     article: [],
    //     name: undefined,
    //     comment: [],
    //     tr: true,
    //     id: '공지사항-0.45855976157345735',
    //     createdDate: '2022-04-04T03:49:40.182Z'
    //   },





class Article extends Board {
    constructor(articles) {//생성자(속성 값)
        super();
        if(!articles) {//매개변수의 기본 값은 undefined이기 때문에 articles가 없을경우 
            return//바로 return을 해준다
        }
        this.comment = [];//Articles안에 comment[]을 만들어줌
        
        if( articles.subject === "" || articles.subject === null ||
            articles.content === "" || articles.content === null || 
            articles.author === "" || articles.author === null) { 
                throw new Error();
        }
        // { 신기한게 생성자에서 subject나 content 등 을 지정해 주지 않았는데 들어감. 뭐냐
        //     subject: '아직 게시하지 않은 공지사항입니다.',
        //     content: '댓글을 달 수 없어야 합니다',
        //     author: '강승현'
        //   }


    }
    reply(comment) { //함수: reply, 매개변수(속성 및 *메서드*): comment  
        if(this.tr) {//조건이 this.tr : ture 일 때
            comment.tr = true//comment.tr에 ture 값을 할당
            comment.createdDate = new Date().toISOString();//현재 시간을 ISO라는 국제 표준 시간으로 바꿔준다.
            this.comment.push(comment);//this.comment comment값을 push
        }else throw new Error();//ture가 아닐경우 Error

    
    }
    getAllComments() {
        return Object(this.comment)//this.comment의 목록을 조회
    }
}

class Comment extends Article{
    constructor(comment) {//생성자(속성 값)
        super();
        if( comment.content === "" || comment.content === null ||
            comment.author === "" || comment.author === null) {
                throw new Error();//content,author의 값이 null,"" 일 경우 에러를 던져준다
            }
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};


// Site(class) {
//      boards[   
//          Board(class){
//               arcticle[
//                    Article(class){ 
//                        comment[ 
//                            Comment(class){

//                         }
//                     ]
                                                
//                 }     
//             ]
            
//         }                
//     ]
// }