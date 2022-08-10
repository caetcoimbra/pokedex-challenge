/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import CommentFormDiv from './styles';
import { db } from '../../services/firebase';

function CommentForm(props) {
  const { pokemon, setAllComments } = props.commentProps;
  const [email, setNewEmail] = useState('');
  const [name, setNewName] = useState('');
  const [message, setNewMessage] = useState('');

  async function handleSubmit(event) {
    setAllComments((prevState) => [...prevState, { name, email, message }]);
    event.preventDefault();

    try {
      const docRef = await addDoc(collection(db, `comments-${pokemon?.name}`), {
        email,
        name,
        message,
      });

      setNewEmail('');
      setNewName('');
      setNewMessage('');
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <div>
      <CommentFormDiv>
        <h1>
          Write your comment about
          {' '}
          {pokemon?.name}
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            name="Email"
            value={email}
            onChange={(e) => setNewEmail(e.target.value)}
            required
          />
          <br />
          <input
            id="username"
            type="text"
            placeholder="Name"
            name="UserName"
            value={name}
            onChange={(e) => setNewName(e.target.value)}
            required
          />
          <br />
          <textarea
            id="message"
            placeholder="Your Comment"
            name="avaliacao"
            value={message}
            onChange={(e) => setNewMessage(e.target.value)}
            required
          />
          <br />
          <button type="submit">Send</button>
        </form>
      </CommentFormDiv>
    </div>
  );
}

export default CommentForm;
