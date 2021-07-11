const Dashboard = ({name, followers}) => (
  <>
    <h1>{name}</h1>
    <p>{`Followers: ${followers}`}</p>
  </> 
);

Dashboard.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/users/alexcavender');
  const user = await res.json();

  return user;
};

export default Dashboard;