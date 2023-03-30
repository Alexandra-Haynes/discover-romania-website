import "./CommentSectionStyles.css";

function CommentSection() {
  return (
    <>
      <div className="comment-section-container">
        <h3 className="comment-title">Share your opinion</h3>
        <form>
          <div class="input-group">
            <label for="name">Name*</label>
            <input type="text" name="name" required />
          </div>
          <div class="input-group">
            <label for='email'>Email*</label>
            <input type="email" name='email' required />
          </div>
          <div class="input-group textarea">
            <label>Your comment*</label>
            <textarea rows="8" cols="70" required></textarea>
          </div>
          <button type="submit" value="submit" class="comment-button">
            Post comment
          </button>
        </form>
      </div>
    </>
  );
}

export default CommentSection;
