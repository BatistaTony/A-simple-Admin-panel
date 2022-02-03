import { FC } from "react"
import { LayoutContainer, Title } from './styles'

interface PageLayoutProps {
    title: string 
    children:  React.ReactNode
}

const PageLayout: FC<PageLayoutProps> = ({ title, children }: PageLayoutProps) => {
  return (
    <LayoutContainer>
      <Title>{title}</Title>
      {children}
    </LayoutContainer>
  );
};

export default PageLayout