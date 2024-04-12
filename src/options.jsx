// Options component for the extension.q

import React from 'react';
import { Form, Button } from 'react-bootstrap';

import { useTranslation } from 'next-i18next';

const Options = () => {
  const { t } = useTranslation('options');

  return (
    <div>
      <h1>{t('title')}</h1>
      <Form>
        <Button variant="primary" type="submit">
          {t('save')}
        </Button>
      </Form>
    </div>
  );
};

export default Options;

