export default function Body() {
  return (
    <main>
      <h2>Become a <span>Sushi</span> master!</h2>
      <p className="register-sub">Register Today</p>
      <p>Sushi <strong>isn't</strong> just a <strong>food</strong>! It's an art that takes time and practice. With us you'll learn this art under the eye of the best sushi masters you can find on earth!</p>
      <div>
        <form>
          <input type="text" name="firstName" id="firstName" required placeholder="First name"/>
          <input type="email" name="email" id="email" required placeholder="Email"/>
          <button>Register</button>
        </form>
      </div>
      <p className="close-note">We will never share your personal information without your permission</p>
    </main>
  )
}