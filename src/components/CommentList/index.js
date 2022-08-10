/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebase';
import {
  CommentListDiv, StyledName, StyledMail, StyledMessage,
} from './styles';

function CommentList(props) {
  const { pokemon, comments, setAllComments } = props.commentProps;
  const collectionRef = collection(db, `comments-${pokemon?.name}`);

  const loadAllComments = async () => {
    await getDocs(collectionRef).then((snapshot) => {
      const allComments = snapshot.docs.map((doc) => doc.data());
      setAllComments(allComments);
    });
  };
  useEffect(() => {
    loadAllComments();
  }, []);

  return (
    <span>
      <h1>
        Comments about
        {' '}
        {pokemon?.name}
      </h1>
      {comments.map((comment) => (
        <div>
          <hr />
          <CommentListDiv>
            <StyledName>
              <h4>Name</h4>
              {' '}
              {comment.name}
            </StyledName>
            <StyledMail>
              <h4>E-Mail:</h4>
              {' '}
              {comment.email}
            </StyledMail>
            <StyledMessage>
              <h4>Comment:</h4>
              {' '}
              {comment.message}
            </StyledMessage>
          </CommentListDiv>
        </div>
      ))}
      <hr />
    </span>
  );
}
export default CommentList;
