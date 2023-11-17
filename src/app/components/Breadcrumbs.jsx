import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink, 
  Link
} from '@chakra-ui/react';
import { Link as NextLink } from 'next/link';

const Breadcrumbs = ({ paths }) => {
  return (
    <Box>
      <Breadcrumb>
        {paths.map((path, index) => (
          <BreadcrumbItem
            key={index}
            isCurrentPage={index === paths.length - 1}
          >
            <Link as={NextLink} href={path.path}>
              <BreadcrumbLink>{path.title}</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </Box>
  );
};

export default Breadcrumbs;
