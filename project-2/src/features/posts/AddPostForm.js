import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdd } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

export function AddPostForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdd(title, content, userId));
    }
    setTitle("");
    setContent("");
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <div>
          <label htmlFor="postTitle">Post Title:</label>
          <input
            id="postTitle"
            value={title}
            name="postTitle"
            onChange={onTitleChanged}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="postAuthor">Author: </label>
          <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
            <option value=""></option>
            {usersOptions}
          </select>
        </div>
        <div>
          <label htmlFor="postContent">Post Content:</label>
          <input
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
            type="text"
          />
        </div>
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Send Post
        </button>
      </form>
    </section>
  );
}
