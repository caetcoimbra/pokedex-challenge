import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { CommentListDiv } from './styles';

interface Comment {
  email: string;
  message: string;
  name: string;
}

const CommentList = ({ pokemon }: { pokemon: any }) => {
  const [comments, setAllComments] = useState<Comment[]>([]);
  const collectionRef = collection(db, `comments-${pokemon.id}`);

  const loadAllComments = () => {
    getDocs(collectionRef).then((snapshot) => {
      const commentsData: any = snapshot.docs.map((doc) => doc.data());
      const allComments = commentsData;
      setAllComments(allComments);
      console.log(comments);
    });
  };

  useEffect(() => {
    loadAllComments();
  });

  return (
    <div>
      <CommentListDiv>
        <h1>Comments about {pokemon.name}</h1>
        <h2>Name: {comments.name}</h2>
        <h2>E-Mail: {comments.email}</h2>
        <p>
          Message:
          <br />
          {comments.message}
        </p>
      </CommentListDiv>
    </div>
  );
};

export default CommentList;
