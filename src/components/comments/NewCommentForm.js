import { useEffect, useRef } from "react";
import { addComment } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const { sendRequest, status, data, error } = useHttp(addComment);

  const { onAddedComment, quoteId } = props;

  useEffect(() => {
    if (status === "completed" && !error) onAddedComment();
  }, [onAddedComment, status, error]);

  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredText = commentTextRef.current.value;
    // optional: Could validate here

    // send comment to server
    sendRequest({ commentData: { text: enteredText }, quoteId: quoteId });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
