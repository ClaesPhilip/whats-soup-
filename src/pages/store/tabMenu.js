import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ProductItem from './ProductItem';
import { ProductsContext } from '../../contexts/ProductsContext';
import styles from './ProductsGrid.module.scss';

import Image from './soupLove.jpg';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {products, soup, bread, spread, treats, beverages} = useContext(ProductsContext)

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant='scrollable'
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Soup" {...a11yProps(0)} />
          <Tab label="Protein" {...a11yProps(1)} />
          <Tab label="Bread" {...a11yProps(2)} />
          <Tab label="Spreads" {...a11yProps(3)} />
          <Tab label="Treats" {...a11yProps(4)} />
          <Tab label="Bevereges" {...a11yProps(5)} />
          <Tab label="Soupogram" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className={styles.p__grid}>
            {
            soup.map(product => (
            <ProductItem key={product.id} product={product}/>
            ))
            }
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className={styles.p__grid}>
            {
            products.map(product => (
            <ProductItem key={product.id} product={product}/>
            ))
            }
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className={styles.p__grid}>
            {
            bread.map(product => (
            <ProductItem key={product.id} product={product}/>
            ))
            }
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className={styles.p__grid}>
            {
            spread.map(product => (
            <ProductItem key={product.id} product={product}/>
            ))
            }
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div className={styles.p__grid}>
            {
            treats.map(product => (
            <ProductItem key={product.id} product={product}/>
            ))
            }
        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <div className={styles.p__grid}>
            {
            beverages.map(product => (
            <ProductItem key={product.id} product={product}/>
            ))
            }
        </div>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <div>
          <p className='pm'>Soupogram coming soon <br></br>

            Sincerely / What´s soup</p>

            <img src={Image} alt='bröd' className='soupLove'></img>
        </div>
      </TabPanel>
    </div>
  );
}