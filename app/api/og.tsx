import { ImageResponse } from "next/server";

export const runtime = "edge";

export async function GET(title: string, description: string) {
	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 128,
					background: "#111111",
					width: "100%",
					height: "100%",
					display: "flex",
					textAlign: "center",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{title}
				{description}
			</div>
		),
		{
			width: 1600,
			height: 836,
		}
	);
}
