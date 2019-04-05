import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author={faker.name.firstName()} timeAgo="Today at 4:49 PM" content={faker.lorem.paragraph()} avatar={faker.image.avatar()}/>
            <CommentDetail author={faker.name.firstName()} timeAgo="Today at 3:43 PM"  content={faker.lorem.paragraph()} avatar={faker.image.avatar()}/>
            <CommentDetail author={faker.name.firstName()} timeAgo="Yesterday at 5:34 PM" content={faker.lorem.paragraph()} avatar={faker.image.avatar()}/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))