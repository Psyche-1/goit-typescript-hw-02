import { FormEvent } from "react"
import toast from 'react-hot-toast';

interface SearchBarProps {
    onSearch: (newQuery: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    // const search = (form.elements.search) as HTMLInputElement)?;

    const search = (form.elements.namedItem('search') as HTMLInputElement)?.value;
    
    if (search.trim() === '') {
      toast.error(`Enter text for finding images`);
      return;
    }

    onSearch(search.trim());
    form.reset();
  };

  return (
    <header >
      <form onSubmit={handleSubmit}>
        <button type="submit">Search</button>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
export default SearchBar;
