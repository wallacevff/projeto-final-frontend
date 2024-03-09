// components/QuillEditor.tsx
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // import the styles

interface QuillEditorProps {
  value: string;
  onChange: (value: string) => void;
}

// Use dynamic import to load QuillEditor only on the client-side
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const QuillEditor: React.FC<QuillEditorProps> = ({ value, onChange }) => {
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={(content) => onChange(content)}
      modules={{
        toolbar: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image'],
        ],
      }}
    />
  );
};

export default QuillEditor;
