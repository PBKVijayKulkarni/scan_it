import { useQuery } from "@tanstack/react-query";

function Users() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.json();
    },
  });

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>Error loading users</h3>;

  return (
    <div>
      <h2>User List</h2>
      {data.map((user) => (
        <div key={user.id}>
          {user.name} - {user.email}
        </div>
      ))}
    </div>
  );
}

export default Users;