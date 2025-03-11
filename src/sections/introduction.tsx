
type AboutProps = {
	data: {
		name: string;
		user: string;
		bio: string;
	}
}

const AboutCard = ({ data } : AboutProps) => {
	return (
		<div className="col col-md-6 col-xl-4">
			<div className="p-4" style={{ background: "#111", minHeight: "128px" }}>
				<h2>{data.name}</h2>
				<h4>@{data.user}</h4>
				<p>{data.bio}</p>

			</div>
		</div>
	);
}

const data = [
	{
		name: "Test",
		user: "testuser",
		bio: "beep boop this is my bio"
	},
	{
		name: "Test",
		user: "testuser",
		bio: `beep boop this is my bio\nbeep boop this is my bio\nbeep boop this is my bio\nbeep boop this is my bio\nbeep boop this is my bio\nbeep boop this is my bio\nbeep boop this is my bio\nbeep boop this is my bio\nbeep boop this is my bio\nbeep boop this is my bio\nbeep boop this is my bio\nbeep boop this is my bio\n`
	}
]

export const Introduction = () => {
  return (
	<>
		<h2 style={{ paddingLeft: "32px" }}>The Team</h2>
		<div className="container-fluid">
			<div className="row gx-3 gy-4 row-cols-1 row-cols-sm-2 row-cols-md-4">
				{/* <div style={{ background: "#111", minHeight: "128px" }}/> */}
				{/* <div style={{ background: "#111", minHeight: "128px" }}/> */}
				{/* <div style={{ background: "#111", minHeight: "128px" }}/> */}
				{data.map(x => <AboutCard data={x}/>)}
			</div>
		</div>
	</>
  );
};