import Markdown from "react-markdown";


function MarkdownRenderer({ content }: { content: string }) {
    return (
        <div className="prose max-w-none">
            <Markdown
            >
                {content}
            </Markdown>
        </div>
    );
}

export default MarkdownRenderer;