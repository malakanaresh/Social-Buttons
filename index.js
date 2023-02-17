const Button = (props) => {
  //  Write your code here.
  const { className, name } = props;
  return <button className={className}>{name}</button>;
};

const element = (
  //  Write your code here.
  <div className="container">
    <h1>Social Buttons</h1>
    <div>
      <Button className="like" name="Like" />
      <Button class="comment" name="Comment" />
      <Button className="share" name="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
