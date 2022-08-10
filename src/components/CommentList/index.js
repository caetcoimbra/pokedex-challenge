/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebase';
import {
  CommentListDiv, StyledName, StyledMessage,
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
          <CommentListDiv>
            <StyledName>
              <h4>
                Name:
                {' '}
                {comment.name}
              </h4>
            </StyledName>
            <StyledMessage>
              <h4>
                Comment:
                {' '}
                {comment.message}
              </h4>
            </StyledMessage>
          </CommentListDiv>
        </div>
      ))}
      <hr />
    </span>
  );
}
export default CommentList;
