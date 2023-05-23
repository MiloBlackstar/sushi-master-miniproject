export default function Body() {
  return (
    <main>
      <h2>Become a <span>Sushi</span> master!</h2>
      <p className="register-sub">Register Today</p>
      <p>Sushi <strong>is not</strong> just a <strong>food</strong>! It is an art that takes time and practice. With us you will learn this art under the eye of the best sushi masters there is on earth! Do not hesitate and join our webinar for free!</p>
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
