import * as React from 'react';
import { FC, ReactElement, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Company } from '../../types';
import { Box } from '@mui/material';
import Actions from './components/Actions';
import Information from './components/Information';

interface Props {
  company: Company;
  areDescCollapsed: boolean;
}

const CompanyCard: FC<Props> = ({ company, areDescCollapsed }) => {
  const [expanded, setExpanded] = React.useState(false);

  useEffect(() => {
    setExpanded(!areDescCollapsed);
  }, [areDescCollapsed]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        border: '1px solid #e0e0e0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      <Box sx={{ display: 'flex', p: 1 }} className="child">
        <CardMedia
          component="img"
          width="100%"
          sx={{
            flex: 0,
            objectFit: 'contain',
            width: '100px !important',
            height: 100,
            border: '1px solid #e0e0e0',
          }}
          image={company.image}
          alt="logo"
        />
        <Box sx={{ p: 1, pt: 0, pb: 0, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Typography variant="h6" color="text.primary">
            {company.name}
          </Typography>
          <CustomText title="Category" description={company.category} />
          {company.discount && (
            <>
              <CustomText
                title="Discount"
                description={`${company?.discountVariant || ''} ${company.discount.join('-')} %`}
              />
              {company.discountDescription && (
                <CustomText title="More" description={company.discountDescription} />
              )}
            </>
          )}
          {company.promoCode && <CustomText title="Promo Code" description={company.promoCode} />}
          {company.familyDiscount && (
            <CustomText title="Family Discount" description={company.familyDiscount} />
          )}
          {company.instructions && (
            <CustomText title="Instructions" description={company.instructions} />
          )}
          {company.price && <CustomText title="Price" description={company.price} />}
          {company.registrationLink && (
            <Typography variant="subtitle2" color="text.secondary">
              Registration Link:{' '}
              <Typography component="span" variant="body2">
                <a
                  href={company.registrationLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    wordBreak: 'break-all',
                  }}
                >
                  {company.registrationLink}
                </a>
              </Typography>
            </Typography>
          )}
          {company.contactPerson && (
            <CustomText title="Contact Person" description={company.contactPerson} />
          )}
          {company.contactNumber && (
            <CustomText title="Contact Number" description={company.contactNumber} />
          )}
        </Box>
      </Box>
      <Actions expanded={expanded} handleExpandClick={handleExpandClick} company={company} />
      {company?.description && (
        <Information expanded={expanded} description={company.description.toString()} />
      )}
    </Card>
  );
};

const CustomText = ({ title, description }: { title: string; description: string }) => {
  return (
    <Typography variant="subtitle2" color="text.secondary">
      {title}:{' '}
      <Typography component="span" variant="body2">
        {description}
      </Typography>
    </Typography>
  );
};

export default CompanyCard;
