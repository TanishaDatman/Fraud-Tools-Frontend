declare module 'react-date-range' {
    import * as React from 'react';
  
    export interface RangeKeyDict {
      [key: string]: Range;
    }
  
    export interface Range {
      startDate: Date | null;
      endDate: Date | null;
      key?: string;
      color?: string;
    }
  
    export interface DateRangeProps {
      onChange: (ranges: RangeKeyDict) => void;
      ranges: Range[];
      showSelectionPreview?: boolean;
      moveRangeOnFirstSelection?: boolean;
      months?: number;
      direction?: 'horizontal' | 'vertical';
      className?: string;
      editableDateInputs?: boolean;
      minDate?: Date;
      maxDate?: Date;
    }
  
    export class DateRange extends React.Component<DateRangeProps> {}
  }
  