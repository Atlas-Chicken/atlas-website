import { Anchor } from "../components/anchor";

type AboutProps = {
	data: {
		name: string;
		user: string;
		bio: string;
	}
}

const AboutCard = ({ data } : AboutProps) => {
	return (
		<div className="col col-md-6 col-xl-4 p-2">
			<div className="p-3" style={{ background: "#00000033", minHeight: "128px", borderRadius: 12 }}>
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
	},
	{
		name: "Test",
		user: "testuser",
		bio: "beep boop this is my bio"
	},
	{
		name: "Test",
		user: "testuser",
		bio: "beep boop this is my bio"
	},
	{
		name: "Test",
		user: "testuser",
		bio: "beep boop this is my bio"
	}
]

export const Introduction = () => {
  return (
	<>
		<Anchor id="about" title="The Team"/>
		<div className="container-fluid">
			<div className="row gx-1 gy-4 row-cols-1 row-cols-sm-2 row-cols-md-4">
				{data.map(x => <AboutCard data={x}/>)}
			</div>
		</div>
	</>
  );
};