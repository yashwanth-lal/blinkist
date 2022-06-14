import styled from '@emotion/styled';

export interface ProgressBarProps {
  progress?: number;
}

function ProgressBar({ progress }: ProgressBarProps) {
  const OuterDiv = styled('div')({
    width: '100%',
    height: '15px',
    backgroundColor: '#f1f6f4',
    padding: 0,
    marginTop: 0,
    border: '1px',
    boxSizing: 'border-box',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  });
  const progressed =
    progress !== undefined && progress !== null ? `${progress}%` : '100%';

  const InnerDiv = styled('div')({
    width: progressed,
    height: '15px',
    marginTop: 0,
    padding: 0,
    backgroundColor: '#E1ECFC',
    borderBottomLeftRadius:10,
    
  });

  return (
    <OuterDiv data-testid="progressBar">
      <InnerDiv  data-testid="progressBar"/>
    </OuterDiv>
  );
}
export default ProgressBar;