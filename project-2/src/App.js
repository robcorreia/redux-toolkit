import "./App.css";
import { PostsList } from "./features/posts/PostsList";
import { AddPostForm } from "./features/posts/AddPostForm";

export function App() {
  return (
    <div className="container">
      <AddPostForm />
      <PostsList />
    </div>
  );
}
