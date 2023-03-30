export const UserInfo = ({ user }) => {
	const { name, age, hairColor, hobbies } = user || {};

	// typically, user will be passed in as a prop to UserInfo via the container component
	return user ? (
		<>
			<div className="user">
				<h3 className="user__name">{name}</h3>
				<p className="user__age">Age: {age} years</p>
				<p className="user__hair">Hair Color: {hairColor}</p>
				<h3 className="user__hobby-heading">Hobbies:</h3>
				<ul className="user__hobby-list">
					{hobbies.map(hobby => <li key={hobby} className="user__hobby-list-item">{hobby}</li>)}
				</ul>
			</div>
		</>
	): 
	<p>Loading...</p>;
}
