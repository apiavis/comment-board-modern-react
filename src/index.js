import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from "./CommentDetail";
import faker from 'faker';

const App = function() {
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="Sam" 
                timeAgo="Today at 4:45PM" 
                content="Nice blog post!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Alex" 
                timeAgo="Yesterdat at 12:45PM" 
                content="I like the subject!" 
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Jane" 
                timeAgo="Today at 9:30AM" 
                content="I like your writing!" 
                avatar={faker.image.avatar()}
            />
        </div>
    )
};

ReactDom.render(<App />, document.querySelector('#root'));