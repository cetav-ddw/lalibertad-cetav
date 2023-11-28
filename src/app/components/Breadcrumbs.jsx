import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';

const Breadcrumbs = ({ paths }) => {
  return (
    <Box mb="8">
      <Breadcrumb>
        {paths.map((path, index) => (
          <BreadcrumbItem
            key={index}
            isCurrentPage={index === paths.length - 1}
          >
            <BreadcrumbLink
              href={path.path}
              color={index === paths.length - 1 ? 'blue.500' : 'gray.500'}
              textDecoration={index === paths.length - 1 ? 'underline' : 'none'}
              fontSize="sm"
            >
              {path.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </Box>
  );
};

export default Breadcrumbs;
