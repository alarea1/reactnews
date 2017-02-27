import React from 'react';
import URL from 'url';
import './NewsItem.css';
import Moment from 'moment';
export default class NewsItem extends React.Component {
  render() {
    return (
        <div className="newsItem">
         {this.getRank()}
         <div className="newsItem-itemText">
         {this.getTitle()}
         {this.getSubtext()}
       </div>
       </div>
        );
  }
  getDomain() {
 return URL.parse(this.props.item.url).hostname;
}
getTitle() {
 return (
     <div className="newsItem-title">
       <a className="newsItem-titleLink" href={this.props.item.url}>{this.props.item.title}</a>
       <span className="newsItem-domain"><a href={'https://news.ycombinator.com/from?site=' + this.getDomain()}>({this.getDomain()})</a></span>
      </div>
     );
}
getCommentLink() { // 评论链接
 var commentText = 'discuss';
 if(this.props.item.kids && this.props.item.kids.length) {
   commentText = this.props.item.kids.length + ' comment';
 }

 return (
     <a href={'https://news.ycombinator.com/item?id=' + this.props.item.id}>{commentText}</a>
     );
}

getSubtext() { // 分数, 作者, 时间, 评论数
 return (
     <div className="newsItem-subtext">
       {this.props.item.score} points by <a href={'https://news.ycombinator.com/user?id=' + this.props.item.by}>{this.props.item.by}</a> {Moment.utc(this.props.item.time * 1000).fromNow()} | {this.getCommentLink()}
     </div>
     );
}

getRank() { // 序号
 return (
     <div className="newsItem-rank">
       {this.props.rank}.
     </div>
     );
}



}

