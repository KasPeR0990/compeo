import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowRight } from 'lucide-react'
import { UIMessage } from '@ai-sdk/ui-utils';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import useWindowSize from '@/hooks/use-window-size';

interface FormComponentProps {
   input: string;
   setInput: (input: string) => void;
   handleSubmit: (event?: { preventDefault?: () => void }) => void;
   inputRef: React.RefObject<HTMLTextAreaElement>;
   messages: Array<UIMessage>;
   setHasSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
   status: 'submitted' | 'loading' | 'ready' | 'error';
}

const MAX_INPUT_CHARS = 200;



const FormComponent: React.FC<FormComponentProps> = ({
   input,
   setInput,
   handleSubmit,
   inputRef,
   messages,
   setHasSubmitted,
   status
}) => {
  const MIN_HEIGHT = 42;
  const MAX_HEIGHT = 72;

  const [isExceedingLimit, setIsExceedingLimit] = useState(false);
  const { width } = useWindowSize();



  const autoResizeInput = (target: HTMLTextAreaElement) => {
    if (!target) return;
    target.style.height = `${MIN_HEIGHT}px`;
    const scrollHeight = target.scrollHeight;
    if (scrollHeight > MIN_HEIGHT) {
      requestAnimationFrame(() => {
        target.style.height = `${Math.min(scrollHeight, MAX_HEIGHT)}px`;
      });
    }
  };

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    const newValue = event.target.value;

    if (newValue.length > MAX_INPUT_CHARS) {
      setIsExceedingLimit(true);
      setInput(newValue);
      toast.error(`Your input exceeds the maximum of ${MAX_INPUT_CHARS} characters.`);
    } else {
      setIsExceedingLimit(false);
      setInput(newValue);
    }

    autoResizeInput(event.target);
  };

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      event.stopPropagation();
  
      if (input.length > MAX_INPUT_CHARS) {
        toast.error(`Maximum ${MAX_INPUT_CHARS} characters allowed.`);
        return;
      }
  
      const trimmedInput = input.trim();
      if (!trimmedInput) {
        toast.error('Please enter a search query.');
        return;
      }
  
      setHasSubmitted(true);
      handleSubmit(event);
    },
    [input, handleSubmit, setHasSubmitted]
  );


  const submitForm = useCallback(() => {
    onSubmit({ preventDefault: () => {}, stopPropagation: () => {} } as React.FormEvent<HTMLFormElement>);
    if (width && width > 768) {
      inputRef.current?.focus();
    }
  }, [onSubmit, width, inputRef]);


  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Only handle Enter key without Shift
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      submitForm();
      
      // Maintain focus on desktop after submission
      if (width && width > 768) {
        inputRef.current?.focus();
      }
    }
  };




  return (
    <form 
      onSubmit={handleSubmit} 
      className="w-full max-w-7xl mx-auto relative"
    >
      <div className="relative w-full bg-neutral-100 dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-700 focus-within:border-neutral-400 dark:focus-within:border-neutral-800">
        <Textarea
          ref={inputRef}
          placeholder="Describe what you're looking for..."
          value={input}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          className={cn(
            'w-full bg-transparent focus:outline-none text-lg leading-relaxed',
            'text-neutral-900 dark:text-neutral-100 placeholder:text-muted-foreground',
            'resize-none pt-5 pb-14 px-4 overflow-hidden'
          )}
          style={{
            minHeight: '110px',
            maxHeight: '350px',
            height: 'auto',
            overflowY: 'auto',
            transition: 'height 0.1s ease-out',
          }}
          rows={1}
          autoFocus={width ? width > 768 : true}
        />
  
        <div className="absolute bottom-0 inset-x-0 flex justify-end items-center p-2">
          <button
            type="submit"
            disabled={!input.trim()}
            className={cn(
              'p-1.5 h-8 w-8 rounded-full flex items-center justify-center',
              'bg-white hover:bg-neutral-100 dark:bg-white dark:hover:bg-neutral-200',
              'text-neutral-900 dark:text-neutral-900',
              'disabled:opacity-50 disabled:cursor-not-allowed'
            )}
          >
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormComponent
