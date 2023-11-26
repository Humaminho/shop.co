type ParagraphProps = {
	content: string;
};

export default function Paragraph({ content }: ParagraphProps) {
	return (
		<p className="text-dark-gray text-sm mb-6 lg:text-base lg:mb-8">
			{content}
		</p>
	);
}
