import { ChangeEvent, FormEvent, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { FiSend } from 'react-icons/fi';
import { useGetCommentQuery, usePostCommentMutation } from '@/redux/features/products/productApi';

interface IProps {
  id: string;
}

export default function ProductReview({ id }: IProps) {
  const [inputValue, setInputValue] = useState<string>('');

  const [postComment, { isLoading, isError, isSuccess }] =
    usePostCommentMutation();
  const { data } = useGetCommentQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const option = {
      id: id,
      data: { comment: inputValue },
    };
    console.log(option, 'option');
    postComment(option);
    setInputValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <form onSubmit={handleSubmit} action="">
        <div className="flex gap-5 items-center">
          <Textarea
            onChange={handleChange}
            value={inputValue}
            className="min-h-[30px]"
          />
          <Button className="rounded-full h-10 w-10 p-2 text-[25px]">
            <FiSend />
          </Button>
        </div>
        <div className="mt-10">
          {data?.comments?.map((comment: string, index: number) => (
            <div key={index} className="flex gap-3 items-center mb-5">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p>{comment}</p>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}
