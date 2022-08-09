import React, { FormEvent, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { CommentFormDiv } from './styles';
import { db } from '../../services/firebase';

const CommentForm = ({ pokemon }: { pokemon: any }) => {
  const [email, setNewEmail] = useState('');
  const [name, setNewName] = useState('');
  const [message, setNewMessage] = useState('');

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    try {
      const docRef = await addDoc(collection(db, `comments-${pokemon.id}`), {
        email: email,
        name: name,
        message: message
      });

      setNewEmail('');
      setNewName('');
      setNewMessage('');
      console.log('Document written with ID: ', docRef.id);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  return (
    <div>
      <CommentFormDiv>
        <h1>Comment about {pokemon.name}</h1>
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
            rows={8}
            cols={40}
            required
          />
          <br />
          <button type="submit">Send</button>
        </form>
      </CommentFormDiv>
    </div>
  );
};

export default CommentForm;
