// some data for playing with
		var capData = [
			{'web_category' : 'U.S. Federal', 'website' : 'www.acquisition.gov', 'rank' : 584, 'variable' : 'IM_NumUniqueColors_Prop', 'value' : 0.0048661800486618},
			{'web_category' : 'U.S. Federal', 'website' : 'www.aids.gov', 'rank' : 591, 'variable' : 'IM_NumUniqueColors_Prop', 'value' : 0.00109769484083424},
			{'web_category' : 'U.S. Federal', 'website' : 'www.arm.gov', 'rank' : 578, 'variable' : 'IM_NumUniqueColors_Prop', 'value' : 0.00567502986857825},
			{'web_category' : 'Google Autism Search', 'website' : 'www.audioeye.comaudi', 'rank' : 590, 'variable' : 'IM_NumUniqueColors_Prop', 'value' : 0.00503905265810027},
			{'web_category' : 'Alexa Rating', 'website' : 'www.bing.com', 'rank' : 583, 'variable' : 'IM_NumUniqueColors_Prop', 'value' : 0.00793650793650793},
			{'web_category' : 'Alexa Rating', 'website' : 'www.blogspot.com', 'rank' : 580, 'variable' : 'IM_NumUniqueColors_Prop', 'value' : 0.00576131687242798},
			{'web_category' : 'Alexa Rating', 'website' : 'www.cnn.com', 'rank' : 587, 'variable' : 'IM_NumUniqueColors_Prop', 'value' : 0.00305810397553516},
			{'web_category' : 'Alexa Rating', 'website' : 'www.discover.com', 'rank' : 582, 'variable' : 'IM_NumUniqueColors_Prop', 'value' : 0.00297377669640443},
			{'web_category' : 'U.S. Federal', 'website' : 'www.iaf.gov', 'rank' : 586, 'variable' : 'IM_NumUniqueColors_Prop', 'value' : 0.0104575163398692},
			{'web_category' : 'U.S. Federal', 'website' : 'www.inl.gov', 'rank' : 600, 'variable' : 'IM_NumUniqueColors_Prop', 'value' : 0.00190865712338104},
			{'web_category' : 'Alexa Rating', 'website' : 'www.intuit.com', 'rank' : 596, 'variable' : 'IM_NumUniqueColors_Prop', 'value' : 0.00451838159786403},
			{'web_category' : 'U.S. Federal', 'website' : 'www.lanl.gov', 'rank' : 592, 'variable' : 'IM_NumUniqueColors_Prop', 'value' : 0.00394623258108274},
			{'web_category' : 'U.S. Federal', 'website' : 'www.medicare.gov', 'rank' : 581, 'variable' : 'IM_NumUniqueColors_Prop', 'value' : 0.00570926657883179},
			{'web_category' : 'U.S. Federal', 'website' : 'www.ncua.gov', 'rank' : 595, 'variable' : 'IM_NumUniqueColors_Prop', 'value' : 0.00131661800904459},
			{'web_category' : 'Google Autism Search', 'website' : 'www.pathfindersforau', 'rank' : 597, 'variable' : 'IM_NumUniqueColors_Prop', 'value' : 0.00597687634724671},
			{'web_category' : 'U.S. Federal', 'website' : 'www.pbgc.gov', 'rank' : 598, 'variable' : 'IM_NumUniqueColors_Prop', 'value' : 0.00210378681626928},
			{'web_category' : 'U.S. Federal', 'website' : 'www.presidio.gov', 'rank' : 589, 'variable' : 'IM_NumUniqueColors_Prop', 'value' : 0.00246415770609319},
			{'web_category' : 'U.S. Federal', 'website' : 'www.recreation.gov', 'rank' : 575, 'variable' : 'IM_NumUniqueColors_Prop', 'value' : 0.00639825218476903},
			{'web_category' : 'U.S. Federal', 'website' : 'www.science360.gov', 'rank' : 579, 'variable' : 'IM_NumUniqueColors_Prop', 'value' : 0.00568828213879408},
			{'web_category' : 'U.S. Federal', 'website' : 'www.selectusa.gov', 'rank' : 585, 'variable' : 'IM_NumUniqueColors_Prop', 'value' : 0.00458715596330275},
			{'web_category' : 'Alexa Rating', 'website' : 'www.taobao.com', 'rank' : 593, 'variable' : 'IM_NumUniqueColors_Prop', 'value' : 0.00182632261105219},
			{'web_category' : 'Google Autism Search', 'website' : 'www.theautismproject', 'rank' : 599, 'variable' : 'IM_NumUniqueColors_Prop', 'value' : 0.00515463917525773},
			{'web_category' : 'Alexa Rating', 'website' : 'www.tmall.com', 'rank' : 594, 'variable' : 'IM_NumUniqueColors_Prop', 'value' : 0.00521262002743484},
			{'web_category' : 'U.S. Federal', 'website' : 'www.truman.gov', 'rank' : 588, 'variable' : 'IM_NumUniqueColors_Prop', 'value' : 0.00587606837606837},
			{'web_category' : 'Alexa Rating', 'website' : 'www.vimeo.com', 'rank' : 577, 'variable' : 'IM_NumUniqueColors_Prop', 'value' : 0.00240105977810895},
			{'web_category' : 'Alexa Rating', 'website' : 'www.wikihow.com', 'rank' : 576, 'variable' : 'IM_NumUniqueColors_Prop', 'value' : 0.00299329501915708},
			{'web_category' : 'U.S. Federal', 'website' : 'www.acquisition.gov', 'rank' : 584, 'variable' : 'IM_text_shadow_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.aids.gov', 'rank' : 591, 'variable' : 'IM_text_shadow_binary_Prop', 'value' : 0.000365898280278082},
			{'web_category' : 'U.S. Federal', 'website' : 'www.arm.gov', 'rank' : 578, 'variable' : 'IM_text_shadow_binary_Prop', 'value' : 0.0241935483870967},
			{'web_category' : 'Google Autism Search', 'website' : 'www.audioeye.comaudi', 'rank' : 590, 'variable' : 'IM_text_shadow_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.bing.com', 'rank' : 583, 'variable' : 'IM_text_shadow_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.blogspot.com', 'rank' : 580, 'variable' : 'IM_text_shadow_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.cnn.com', 'rank' : 587, 'variable' : 'IM_text_shadow_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.discover.com', 'rank' : 582, 'variable' : 'IM_text_shadow_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.iaf.gov', 'rank' : 586, 'variable' : 'IM_text_shadow_binary_Prop', 'value' : 0.00588235294117647},
			{'web_category' : 'U.S. Federal', 'website' : 'www.inl.gov', 'rank' : 600, 'variable' : 'IM_text_shadow_binary_Prop', 'value' : 0.00368098159509202},
			{'web_category' : 'Alexa Rating', 'website' : 'www.intuit.com', 'rank' : 596, 'variable' : 'IM_text_shadow_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.lanl.gov', 'rank' : 592, 'variable' : 'IM_text_shadow_binary_Prop', 'value' : 0.00332963374028856},
			{'web_category' : 'U.S. Federal', 'website' : 'www.medicare.gov', 'rank' : 581, 'variable' : 'IM_text_shadow_binary_Prop', 'value' : 0.0289855072463768},
			{'web_category' : 'U.S. Federal', 'website' : 'www.ncua.gov', 'rank' : 595, 'variable' : 'IM_text_shadow_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.pathfindersforau', 'rank' : 597, 'variable' : 'IM_text_shadow_binary_Prop', 'value' : 0.0264550264550264},
			{'web_category' : 'U.S. Federal', 'website' : 'www.pbgc.gov', 'rank' : 598, 'variable' : 'IM_text_shadow_binary_Prop', 'value' : 0.398316970546984},
			{'web_category' : 'U.S. Federal', 'website' : 'www.presidio.gov', 'rank' : 589, 'variable' : 'IM_text_shadow_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.recreation.gov', 'rank' : 575, 'variable' : 'IM_text_shadow_binary_Prop', 'value' : 0.00702247191011235},
			{'web_category' : 'U.S. Federal', 'website' : 'www.science360.gov', 'rank' : 579, 'variable' : 'IM_text_shadow_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.selectusa.gov', 'rank' : 585, 'variable' : 'IM_text_shadow_binary_Prop', 'value' : 0.00611620795107033},
			{'web_category' : 'Alexa Rating', 'website' : 'www.taobao.com', 'rank' : 593, 'variable' : 'IM_text_shadow_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.theautismproject', 'rank' : 599, 'variable' : 'IM_text_shadow_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.tmall.com', 'rank' : 594, 'variable' : 'IM_text_shadow_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.truman.gov', 'rank' : 588, 'variable' : 'IM_text_shadow_binary_Prop', 'value' : 0.0192307692307692},
			{'web_category' : 'Alexa Rating', 'website' : 'www.vimeo.com', 'rank' : 577, 'variable' : 'IM_text_shadow_binary_Prop', 'value' : 0.0007451564828614},
			{'web_category' : 'Alexa Rating', 'website' : 'www.wikihow.com', 'rank' : 576, 'variable' : 'IM_text_shadow_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.acquisition.gov', 'rank' : 584, 'variable' : 'IM_column_rule_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.aids.gov', 'rank' : 591, 'variable' : 'IM_column_rule_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.arm.gov', 'rank' : 578, 'variable' : 'IM_column_rule_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.audioeye.comaudi', 'rank' : 590, 'variable' : 'IM_column_rule_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.bing.com', 'rank' : 583, 'variable' : 'IM_column_rule_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.blogspot.com', 'rank' : 580, 'variable' : 'IM_column_rule_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.cnn.com', 'rank' : 587, 'variable' : 'IM_column_rule_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.discover.com', 'rank' : 582, 'variable' : 'IM_column_rule_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.iaf.gov', 'rank' : 586, 'variable' : 'IM_column_rule_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.inl.gov', 'rank' : 600, 'variable' : 'IM_column_rule_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.intuit.com', 'rank' : 596, 'variable' : 'IM_column_rule_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.lanl.gov', 'rank' : 592, 'variable' : 'IM_column_rule_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.medicare.gov', 'rank' : 581, 'variable' : 'IM_column_rule_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.ncua.gov', 'rank' : 595, 'variable' : 'IM_column_rule_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.pathfindersforau', 'rank' : 597, 'variable' : 'IM_column_rule_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.pbgc.gov', 'rank' : 598, 'variable' : 'IM_column_rule_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.presidio.gov', 'rank' : 589, 'variable' : 'IM_column_rule_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.recreation.gov', 'rank' : 575, 'variable' : 'IM_column_rule_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.science360.gov', 'rank' : 579, 'variable' : 'IM_column_rule_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.selectusa.gov', 'rank' : 585, 'variable' : 'IM_column_rule_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.taobao.com', 'rank' : 593, 'variable' : 'IM_column_rule_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.theautismproject', 'rank' : 599, 'variable' : 'IM_column_rule_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.tmall.com', 'rank' : 594, 'variable' : 'IM_column_rule_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.truman.gov', 'rank' : 588, 'variable' : 'IM_column_rule_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.vimeo.com', 'rank' : 577, 'variable' : 'IM_column_rule_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.wikihow.com', 'rank' : 576, 'variable' : 'IM_column_rule_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.acquisition.gov', 'rank' : 584, 'variable' : 'IM_perspective_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.aids.gov', 'rank' : 591, 'variable' : 'IM_perspective_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.arm.gov', 'rank' : 578, 'variable' : 'IM_perspective_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.audioeye.comaudi', 'rank' : 590, 'variable' : 'IM_perspective_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.bing.com', 'rank' : 583, 'variable' : 'IM_perspective_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.blogspot.com', 'rank' : 580, 'variable' : 'IM_perspective_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.cnn.com', 'rank' : 587, 'variable' : 'IM_perspective_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.discover.com', 'rank' : 582, 'variable' : 'IM_perspective_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.iaf.gov', 'rank' : 586, 'variable' : 'IM_perspective_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.inl.gov', 'rank' : 600, 'variable' : 'IM_perspective_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.intuit.com', 'rank' : 596, 'variable' : 'IM_perspective_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.lanl.gov', 'rank' : 592, 'variable' : 'IM_perspective_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.medicare.gov', 'rank' : 581, 'variable' : 'IM_perspective_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.ncua.gov', 'rank' : 595, 'variable' : 'IM_perspective_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.pathfindersforau', 'rank' : 597, 'variable' : 'IM_perspective_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.pbgc.gov', 'rank' : 598, 'variable' : 'IM_perspective_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.presidio.gov', 'rank' : 589, 'variable' : 'IM_perspective_binary_Prop', 'value' : 0.00403225806451612},
			{'web_category' : 'U.S. Federal', 'website' : 'www.recreation.gov', 'rank' : 575, 'variable' : 'IM_perspective_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.science360.gov', 'rank' : 579, 'variable' : 'IM_perspective_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.selectusa.gov', 'rank' : 585, 'variable' : 'IM_perspective_binary_Prop', 'value' : 0.00458715596330275},
			{'web_category' : 'Alexa Rating', 'website' : 'www.taobao.com', 'rank' : 593, 'variable' : 'IM_perspective_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.theautismproject', 'rank' : 599, 'variable' : 'IM_perspective_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.tmall.com', 'rank' : 594, 'variable' : 'IM_perspective_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.truman.gov', 'rank' : 588, 'variable' : 'IM_perspective_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.vimeo.com', 'rank' : 577, 'variable' : 'IM_perspective_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.wikihow.com', 'rank' : 576, 'variable' : 'IM_perspective_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.acquisition.gov', 'rank' : 584, 'variable' : 'IM_border_bottom_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.aids.gov', 'rank' : 591, 'variable' : 'IM_border_bottom_style_binary_Prop', 'value' : 0.000365898280278082},
			{'web_category' : 'U.S. Federal', 'website' : 'www.arm.gov', 'rank' : 578, 'variable' : 'IM_border_bottom_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.audioeye.comaudi', 'rank' : 590, 'variable' : 'IM_border_bottom_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.bing.com', 'rank' : 583, 'variable' : 'IM_border_bottom_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.blogspot.com', 'rank' : 580, 'variable' : 'IM_border_bottom_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.cnn.com', 'rank' : 587, 'variable' : 'IM_border_bottom_style_binary_Prop', 'value' : 0.00229357798165137},
			{'web_category' : 'Alexa Rating', 'website' : 'www.discover.com', 'rank' : 582, 'variable' : 'IM_border_bottom_style_binary_Prop', 'value' : 0.00121654501216545},
			{'web_category' : 'U.S. Federal', 'website' : 'www.iaf.gov', 'rank' : 586, 'variable' : 'IM_border_bottom_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.inl.gov', 'rank' : 600, 'variable' : 'IM_border_bottom_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.intuit.com', 'rank' : 596, 'variable' : 'IM_border_bottom_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.lanl.gov', 'rank' : 592, 'variable' : 'IM_border_bottom_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.medicare.gov', 'rank' : 581, 'variable' : 'IM_border_bottom_style_binary_Prop', 'value' : 0.00263504611330698},
			{'web_category' : 'U.S. Federal', 'website' : 'www.ncua.gov', 'rank' : 595, 'variable' : 'IM_border_bottom_style_binary_Prop', 'value' : 0.0211231324059763},
			{'web_category' : 'Google Autism Search', 'website' : 'www.pathfindersforau', 'rank' : 597, 'variable' : 'IM_border_bottom_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.pbgc.gov', 'rank' : 598, 'variable' : 'IM_border_bottom_style_binary_Prop', 'value' : 0.000701262272089761},
			{'web_category' : 'U.S. Federal', 'website' : 'www.presidio.gov', 'rank' : 589, 'variable' : 'IM_border_bottom_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.recreation.gov', 'rank' : 575, 'variable' : 'IM_border_bottom_style_binary_Prop', 'value' : 0.00280898876404494},
			{'web_category' : 'U.S. Federal', 'website' : 'www.science360.gov', 'rank' : 579, 'variable' : 'IM_border_bottom_style_binary_Prop', 'value' : 0.00511945392491467},
			{'web_category' : 'U.S. Federal', 'website' : 'www.selectusa.gov', 'rank' : 585, 'variable' : 'IM_border_bottom_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.taobao.com', 'rank' : 593, 'variable' : 'IM_border_bottom_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.theautismproject', 'rank' : 599, 'variable' : 'IM_border_bottom_style_binary_Prop', 'value' : 0.0231958762886597},
			{'web_category' : 'Alexa Rating', 'website' : 'www.tmall.com', 'rank' : 594, 'variable' : 'IM_border_bottom_style_binary_Prop', 'value' : 0.00987654320987654},
			{'web_category' : 'U.S. Federal', 'website' : 'www.truman.gov', 'rank' : 588, 'variable' : 'IM_border_bottom_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.vimeo.com', 'rank' : 577, 'variable' : 'IM_border_bottom_style_binary_Prop', 'value' : 0.0044709388971684},
			{'web_category' : 'Alexa Rating', 'website' : 'www.wikihow.com', 'rank' : 576, 'variable' : 'IM_border_bottom_style_binary_Prop', 'value' : 0.0021551724137931},
			{'web_category' : 'U.S. Federal', 'website' : 'www.acquisition.gov', 'rank' : 584, 'variable' : 'IM_border_left_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.aids.gov', 'rank' : 591, 'variable' : 'IM_border_left_style_binary_Prop', 'value' : 0.000365898280278082},
			{'web_category' : 'U.S. Federal', 'website' : 'www.arm.gov', 'rank' : 578, 'variable' : 'IM_border_left_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.audioeye.comaudi', 'rank' : 590, 'variable' : 'IM_border_left_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.bing.com', 'rank' : 583, 'variable' : 'IM_border_left_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.blogspot.com', 'rank' : 580, 'variable' : 'IM_border_left_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.cnn.com', 'rank' : 587, 'variable' : 'IM_border_left_style_binary_Prop', 'value' : 0.00229357798165137},
			{'web_category' : 'Alexa Rating', 'website' : 'www.discover.com', 'rank' : 582, 'variable' : 'IM_border_left_style_binary_Prop', 'value' : 0.00121654501216545},
			{'web_category' : 'U.S. Federal', 'website' : 'www.iaf.gov', 'rank' : 586, 'variable' : 'IM_border_left_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.inl.gov', 'rank' : 600, 'variable' : 'IM_border_left_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.intuit.com', 'rank' : 596, 'variable' : 'IM_border_left_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.lanl.gov', 'rank' : 592, 'variable' : 'IM_border_left_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.medicare.gov', 'rank' : 581, 'variable' : 'IM_border_left_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.ncua.gov', 'rank' : 595, 'variable' : 'IM_border_left_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.pathfindersforau', 'rank' : 597, 'variable' : 'IM_border_left_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.pbgc.gov', 'rank' : 598, 'variable' : 'IM_border_left_style_binary_Prop', 'value' : 0.000701262272089761},
			{'web_category' : 'U.S. Federal', 'website' : 'www.presidio.gov', 'rank' : 589, 'variable' : 'IM_border_left_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.recreation.gov', 'rank' : 575, 'variable' : 'IM_border_left_style_binary_Prop', 'value' : 0.00280898876404494},
			{'web_category' : 'U.S. Federal', 'website' : 'www.science360.gov', 'rank' : 579, 'variable' : 'IM_border_left_style_binary_Prop', 'value' : 0.00511945392491467},
			{'web_category' : 'U.S. Federal', 'website' : 'www.selectusa.gov', 'rank' : 585, 'variable' : 'IM_border_left_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.taobao.com', 'rank' : 593, 'variable' : 'IM_border_left_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.theautismproject', 'rank' : 599, 'variable' : 'IM_border_left_style_binary_Prop', 'value' : 0.0360824742268041},
			{'web_category' : 'Alexa Rating', 'website' : 'www.tmall.com', 'rank' : 594, 'variable' : 'IM_border_left_style_binary_Prop', 'value' : 0.00987654320987654},
			{'web_category' : 'U.S. Federal', 'website' : 'www.truman.gov', 'rank' : 588, 'variable' : 'IM_border_left_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.vimeo.com', 'rank' : 577, 'variable' : 'IM_border_left_style_binary_Prop', 'value' : 0.0044709388971684},
			{'web_category' : 'Alexa Rating', 'website' : 'www.wikihow.com', 'rank' : 576, 'variable' : 'IM_border_left_style_binary_Prop', 'value' : 0.0021551724137931},
			{'web_category' : 'U.S. Federal', 'website' : 'www.acquisition.gov', 'rank' : 584, 'variable' : 'IM_border_right_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.aids.gov', 'rank' : 591, 'variable' : 'IM_border_right_style_binary_Prop', 'value' : 0.000365898280278082},
			{'web_category' : 'U.S. Federal', 'website' : 'www.arm.gov', 'rank' : 578, 'variable' : 'IM_border_right_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.audioeye.comaudi', 'rank' : 590, 'variable' : 'IM_border_right_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.bing.com', 'rank' : 583, 'variable' : 'IM_border_right_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.blogspot.com', 'rank' : 580, 'variable' : 'IM_border_right_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.cnn.com', 'rank' : 587, 'variable' : 'IM_border_right_style_binary_Prop', 'value' : 0.00229357798165137},
			{'web_category' : 'Alexa Rating', 'website' : 'www.discover.com', 'rank' : 582, 'variable' : 'IM_border_right_style_binary_Prop', 'value' : 0.00121654501216545},
			{'web_category' : 'U.S. Federal', 'website' : 'www.iaf.gov', 'rank' : 586, 'variable' : 'IM_border_right_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.inl.gov', 'rank' : 600, 'variable' : 'IM_border_right_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.intuit.com', 'rank' : 596, 'variable' : 'IM_border_right_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.lanl.gov', 'rank' : 592, 'variable' : 'IM_border_right_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.medicare.gov', 'rank' : 581, 'variable' : 'IM_border_right_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.ncua.gov', 'rank' : 595, 'variable' : 'IM_border_right_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.pathfindersforau', 'rank' : 597, 'variable' : 'IM_border_right_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.pbgc.gov', 'rank' : 598, 'variable' : 'IM_border_right_style_binary_Prop', 'value' : 0.000701262272089761},
			{'web_category' : 'U.S. Federal', 'website' : 'www.presidio.gov', 'rank' : 589, 'variable' : 'IM_border_right_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.recreation.gov', 'rank' : 575, 'variable' : 'IM_border_right_style_binary_Prop', 'value' : 0.00280898876404494},
			{'web_category' : 'U.S. Federal', 'website' : 'www.science360.gov', 'rank' : 579, 'variable' : 'IM_border_right_style_binary_Prop', 'value' : 0.00511945392491467},
			{'web_category' : 'U.S. Federal', 'website' : 'www.selectusa.gov', 'rank' : 585, 'variable' : 'IM_border_right_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.taobao.com', 'rank' : 593, 'variable' : 'IM_border_right_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.theautismproject', 'rank' : 599, 'variable' : 'IM_border_right_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.tmall.com', 'rank' : 594, 'variable' : 'IM_border_right_style_binary_Prop', 'value' : 0.00987654320987654},
			{'web_category' : 'U.S. Federal', 'website' : 'www.truman.gov', 'rank' : 588, 'variable' : 'IM_border_right_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.vimeo.com', 'rank' : 577, 'variable' : 'IM_border_right_style_binary_Prop', 'value' : 0.0044709388971684},
			{'web_category' : 'Alexa Rating', 'website' : 'www.wikihow.com', 'rank' : 576, 'variable' : 'IM_border_right_style_binary_Prop', 'value' : 0.0021551724137931},
			{'web_category' : 'U.S. Federal', 'website' : 'www.acquisition.gov', 'rank' : 584, 'variable' : 'IM_border_top_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.aids.gov', 'rank' : 591, 'variable' : 'IM_border_top_style_binary_Prop', 'value' : 0.000365898280278082},
			{'web_category' : 'U.S. Federal', 'website' : 'www.arm.gov', 'rank' : 578, 'variable' : 'IM_border_top_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.audioeye.comaudi', 'rank' : 590, 'variable' : 'IM_border_top_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.bing.com', 'rank' : 583, 'variable' : 'IM_border_top_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.blogspot.com', 'rank' : 580, 'variable' : 'IM_border_top_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.cnn.com', 'rank' : 587, 'variable' : 'IM_border_top_style_binary_Prop', 'value' : 0.00229357798165137},
			{'web_category' : 'Alexa Rating', 'website' : 'www.discover.com', 'rank' : 582, 'variable' : 'IM_border_top_style_binary_Prop', 'value' : 0.00121654501216545},
			{'web_category' : 'U.S. Federal', 'website' : 'www.iaf.gov', 'rank' : 586, 'variable' : 'IM_border_top_style_binary_Prop', 'value' : 0.0235294117647058},
			{'web_category' : 'U.S. Federal', 'website' : 'www.inl.gov', 'rank' : 600, 'variable' : 'IM_border_top_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.intuit.com', 'rank' : 596, 'variable' : 'IM_border_top_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.lanl.gov', 'rank' : 592, 'variable' : 'IM_border_top_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.medicare.gov', 'rank' : 581, 'variable' : 'IM_border_top_style_binary_Prop', 'value' : 0.0118577075098814},
			{'web_category' : 'U.S. Federal', 'website' : 'www.ncua.gov', 'rank' : 595, 'variable' : 'IM_border_top_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.pathfindersforau', 'rank' : 597, 'variable' : 'IM_border_top_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.pbgc.gov', 'rank' : 598, 'variable' : 'IM_border_top_style_binary_Prop', 'value' : 0.000701262272089761},
			{'web_category' : 'U.S. Federal', 'website' : 'www.presidio.gov', 'rank' : 589, 'variable' : 'IM_border_top_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.recreation.gov', 'rank' : 575, 'variable' : 'IM_border_top_style_binary_Prop', 'value' : 0.00280898876404494},
			{'web_category' : 'U.S. Federal', 'website' : 'www.science360.gov', 'rank' : 579, 'variable' : 'IM_border_top_style_binary_Prop', 'value' : 0.00511945392491467},
			{'web_category' : 'U.S. Federal', 'website' : 'www.selectusa.gov', 'rank' : 585, 'variable' : 'IM_border_top_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.taobao.com', 'rank' : 593, 'variable' : 'IM_border_top_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.theautismproject', 'rank' : 599, 'variable' : 'IM_border_top_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.tmall.com', 'rank' : 594, 'variable' : 'IM_border_top_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.truman.gov', 'rank' : 588, 'variable' : 'IM_border_top_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.vimeo.com', 'rank' : 577, 'variable' : 'IM_border_top_style_binary_Prop', 'value' : 0.0044709388971684},
			{'web_category' : 'Alexa Rating', 'website' : 'www.wikihow.com', 'rank' : 576, 'variable' : 'IM_border_top_style_binary_Prop', 'value' : 0.0021551724137931},
			{'web_category' : 'U.S. Federal', 'website' : 'www.acquisition.gov', 'rank' : 584, 'variable' : 'IM_box_shadow_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.aids.gov', 'rank' : 591, 'variable' : 'IM_box_shadow_binary_Prop', 'value' : 0.0248810830589096},
			{'web_category' : 'U.S. Federal', 'website' : 'www.arm.gov', 'rank' : 578, 'variable' : 'IM_box_shadow_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.audioeye.comaudi', 'rank' : 590, 'variable' : 'IM_box_shadow_binary_Prop', 'value' : 0.00226757369614512},
			{'web_category' : 'Alexa Rating', 'website' : 'www.bing.com', 'rank' : 583, 'variable' : 'IM_box_shadow_binary_Prop', 'value' : 0.00649350649350649},
			{'web_category' : 'Alexa Rating', 'website' : 'www.blogspot.com', 'rank' : 580, 'variable' : 'IM_box_shadow_binary_Prop', 'value' : 0.0037037037037037},
			{'web_category' : 'Alexa Rating', 'website' : 'www.cnn.com', 'rank' : 587, 'variable' : 'IM_box_shadow_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.discover.com', 'rank' : 582, 'variable' : 'IM_box_shadow_binary_Prop', 'value' : 0.0145985401459854},
			{'web_category' : 'U.S. Federal', 'website' : 'www.iaf.gov', 'rank' : 586, 'variable' : 'IM_box_shadow_binary_Prop', 'value' : 0.0176470588235294},
			{'web_category' : 'U.S. Federal', 'website' : 'www.inl.gov', 'rank' : 600, 'variable' : 'IM_box_shadow_binary_Prop', 'value' : 0.00122699386503067},
			{'web_category' : 'Alexa Rating', 'website' : 'www.intuit.com', 'rank' : 596, 'variable' : 'IM_box_shadow_binary_Prop', 'value' : 0.0166358595194085},
			{'web_category' : 'U.S. Federal', 'website' : 'www.lanl.gov', 'rank' : 592, 'variable' : 'IM_box_shadow_binary_Prop', 'value' : 0.00332963374028856},
			{'web_category' : 'U.S. Federal', 'website' : 'www.medicare.gov', 'rank' : 581, 'variable' : 'IM_box_shadow_binary_Prop', 'value' : 0.0421607378129117},
			{'web_category' : 'U.S. Federal', 'website' : 'www.ncua.gov', 'rank' : 595, 'variable' : 'IM_box_shadow_binary_Prop', 'value' : 0.00309119010819165},
			{'web_category' : 'Google Autism Search', 'website' : 'www.pathfindersforau', 'rank' : 597, 'variable' : 'IM_box_shadow_binary_Prop', 'value' : 0.0211640211640211},
			{'web_category' : 'U.S. Federal', 'website' : 'www.pbgc.gov', 'rank' : 598, 'variable' : 'IM_box_shadow_binary_Prop', 'value' : 0.00561009817671809},
			{'web_category' : 'U.S. Federal', 'website' : 'www.presidio.gov', 'rank' : 589, 'variable' : 'IM_box_shadow_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.recreation.gov', 'rank' : 575, 'variable' : 'IM_box_shadow_binary_Prop', 'value' : 0.00842696629213483},
			{'web_category' : 'U.S. Federal', 'website' : 'www.science360.gov', 'rank' : 579, 'variable' : 'IM_box_shadow_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.selectusa.gov', 'rank' : 585, 'variable' : 'IM_box_shadow_binary_Prop', 'value' : 0.0321100917431192},
			{'web_category' : 'Alexa Rating', 'website' : 'www.taobao.com', 'rank' : 593, 'variable' : 'IM_box_shadow_binary_Prop', 'value' : 0.00424178154825026},
			{'web_category' : 'Google Autism Search', 'website' : 'www.theautismproject', 'rank' : 599, 'variable' : 'IM_box_shadow_binary_Prop', 'value' : 0.0128865979381443},
			{'web_category' : 'Alexa Rating', 'website' : 'www.tmall.com', 'rank' : 594, 'variable' : 'IM_box_shadow_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.truman.gov', 'rank' : 588, 'variable' : 'IM_box_shadow_binary_Prop', 'value' : 0.00240384615384615},
			{'web_category' : 'Alexa Rating', 'website' : 'www.vimeo.com', 'rank' : 577, 'variable' : 'IM_box_shadow_binary_Prop', 'value' : 0.0022354694485842},
			{'web_category' : 'Alexa Rating', 'website' : 'www.wikihow.com', 'rank' : 576, 'variable' : 'IM_box_shadow_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.acquisition.gov', 'rank' : 584, 'variable' : 'IM_position_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.aids.gov', 'rank' : 591, 'variable' : 'IM_position_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.arm.gov', 'rank' : 578, 'variable' : 'IM_position_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.audioeye.comaudi', 'rank' : 590, 'variable' : 'IM_position_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.bing.com', 'rank' : 583, 'variable' : 'IM_position_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.blogspot.com', 'rank' : 580, 'variable' : 'IM_position_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.cnn.com', 'rank' : 587, 'variable' : 'IM_position_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.discover.com', 'rank' : 582, 'variable' : 'IM_position_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.iaf.gov', 'rank' : 586, 'variable' : 'IM_position_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.inl.gov', 'rank' : 600, 'variable' : 'IM_position_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.intuit.com', 'rank' : 596, 'variable' : 'IM_position_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.lanl.gov', 'rank' : 592, 'variable' : 'IM_position_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.medicare.gov', 'rank' : 581, 'variable' : 'IM_position_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.ncua.gov', 'rank' : 595, 'variable' : 'IM_position_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.pathfindersforau', 'rank' : 597, 'variable' : 'IM_position_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.pbgc.gov', 'rank' : 598, 'variable' : 'IM_position_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.presidio.gov', 'rank' : 589, 'variable' : 'IM_position_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.recreation.gov', 'rank' : 575, 'variable' : 'IM_position_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.science360.gov', 'rank' : 579, 'variable' : 'IM_position_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.selectusa.gov', 'rank' : 585, 'variable' : 'IM_position_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.taobao.com', 'rank' : 593, 'variable' : 'IM_position_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.theautismproject', 'rank' : 599, 'variable' : 'IM_position_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.tmall.com', 'rank' : 594, 'variable' : 'IM_position_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.truman.gov', 'rank' : 588, 'variable' : 'IM_position_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.vimeo.com', 'rank' : 577, 'variable' : 'IM_position_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.wikihow.com', 'rank' : 576, 'variable' : 'IM_position_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.acquisition.gov', 'rank' : 584, 'variable' : 'IM_text_decoration_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.aids.gov', 'rank' : 591, 'variable' : 'IM_text_decoration_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.arm.gov', 'rank' : 578, 'variable' : 'IM_text_decoration_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.audioeye.comaudi', 'rank' : 590, 'variable' : 'IM_text_decoration_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.bing.com', 'rank' : 583, 'variable' : 'IM_text_decoration_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.blogspot.com', 'rank' : 580, 'variable' : 'IM_text_decoration_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.cnn.com', 'rank' : 587, 'variable' : 'IM_text_decoration_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.discover.com', 'rank' : 582, 'variable' : 'IM_text_decoration_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.iaf.gov', 'rank' : 586, 'variable' : 'IM_text_decoration_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.inl.gov', 'rank' : 600, 'variable' : 'IM_text_decoration_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.intuit.com', 'rank' : 596, 'variable' : 'IM_text_decoration_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.lanl.gov', 'rank' : 592, 'variable' : 'IM_text_decoration_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.medicare.gov', 'rank' : 581, 'variable' : 'IM_text_decoration_style_binary_Prop', 'value' : 0.00263504611330698},
			{'web_category' : 'U.S. Federal', 'website' : 'www.ncua.gov', 'rank' : 595, 'variable' : 'IM_text_decoration_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.pathfindersforau', 'rank' : 597, 'variable' : 'IM_text_decoration_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.pbgc.gov', 'rank' : 598, 'variable' : 'IM_text_decoration_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.presidio.gov', 'rank' : 589, 'variable' : 'IM_text_decoration_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.recreation.gov', 'rank' : 575, 'variable' : 'IM_text_decoration_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.science360.gov', 'rank' : 579, 'variable' : 'IM_text_decoration_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.selectusa.gov', 'rank' : 585, 'variable' : 'IM_text_decoration_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.taobao.com', 'rank' : 593, 'variable' : 'IM_text_decoration_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.theautismproject', 'rank' : 599, 'variable' : 'IM_text_decoration_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.tmall.com', 'rank' : 594, 'variable' : 'IM_text_decoration_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.truman.gov', 'rank' : 588, 'variable' : 'IM_text_decoration_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.vimeo.com', 'rank' : 577, 'variable' : 'IM_text_decoration_style_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.wikihow.com', 'rank' : 576, 'variable' : 'IM_text_decoration_style_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.acquisition.gov', 'rank' : 584, 'variable' : 'IM_background_attachment_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.aids.gov', 'rank' : 591, 'variable' : 'IM_background_attachment_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.arm.gov', 'rank' : 578, 'variable' : 'IM_background_attachment_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.audioeye.comaudi', 'rank' : 590, 'variable' : 'IM_background_attachment_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.bing.com', 'rank' : 583, 'variable' : 'IM_background_attachment_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.blogspot.com', 'rank' : 580, 'variable' : 'IM_background_attachment_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.cnn.com', 'rank' : 587, 'variable' : 'IM_background_attachment_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.discover.com', 'rank' : 582, 'variable' : 'IM_background_attachment_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.iaf.gov', 'rank' : 586, 'variable' : 'IM_background_attachment_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.inl.gov', 'rank' : 600, 'variable' : 'IM_background_attachment_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.intuit.com', 'rank' : 596, 'variable' : 'IM_background_attachment_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.lanl.gov', 'rank' : 592, 'variable' : 'IM_background_attachment_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.medicare.gov', 'rank' : 581, 'variable' : 'IM_background_attachment_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.ncua.gov', 'rank' : 595, 'variable' : 'IM_background_attachment_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.pathfindersforau', 'rank' : 597, 'variable' : 'IM_background_attachment_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.pbgc.gov', 'rank' : 598, 'variable' : 'IM_background_attachment_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.presidio.gov', 'rank' : 589, 'variable' : 'IM_background_attachment_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.recreation.gov', 'rank' : 575, 'variable' : 'IM_background_attachment_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.science360.gov', 'rank' : 579, 'variable' : 'IM_background_attachment_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.selectusa.gov', 'rank' : 585, 'variable' : 'IM_background_attachment_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.taobao.com', 'rank' : 593, 'variable' : 'IM_background_attachment_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.theautismproject', 'rank' : 599, 'variable' : 'IM_background_attachment_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.tmall.com', 'rank' : 594, 'variable' : 'IM_background_attachment_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.truman.gov', 'rank' : 588, 'variable' : 'IM_background_attachment_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.vimeo.com', 'rank' : 577, 'variable' : 'IM_background_attachment_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.wikihow.com', 'rank' : 576, 'variable' : 'IM_background_attachment_binary_Prop', 'value' : 0.00107758620689655},
			{'web_category' : 'U.S. Federal', 'website' : 'www.acquisition.gov', 'rank' : 584, 'variable' : 'IM_background_image_binary_Prop', 'value' : 0.0413625304136253},
			{'web_category' : 'U.S. Federal', 'website' : 'www.aids.gov', 'rank' : 591, 'variable' : 'IM_background_image_binary_Prop', 'value' : 0.00109769484083424},
			{'web_category' : 'U.S. Federal', 'website' : 'www.arm.gov', 'rank' : 578, 'variable' : 'IM_background_image_binary_Prop', 'value' : 0.0188172043010752},
			{'web_category' : 'Google Autism Search', 'website' : 'www.audioeye.comaudi', 'rank' : 590, 'variable' : 'IM_background_image_binary_Prop', 'value' : 0.00680272108843537},
			{'web_category' : 'Alexa Rating', 'website' : 'www.bing.com', 'rank' : 583, 'variable' : 'IM_background_image_binary_Prop', 'value' : 0.103896103896103},
			{'web_category' : 'Alexa Rating', 'website' : 'www.blogspot.com', 'rank' : 580, 'variable' : 'IM_background_image_binary_Prop', 'value' : 0.0111111111111111},
			{'web_category' : 'Alexa Rating', 'website' : 'www.cnn.com', 'rank' : 587, 'variable' : 'IM_background_image_binary_Prop', 'value' : 0.0091743119266055},
			{'web_category' : 'Alexa Rating', 'website' : 'www.discover.com', 'rank' : 582, 'variable' : 'IM_background_image_binary_Prop', 'value' : 0.0644768856447688},
			{'web_category' : 'U.S. Federal', 'website' : 'www.iaf.gov', 'rank' : 586, 'variable' : 'IM_background_image_binary_Prop', 'value' : 0.0323529411764705},
			{'web_category' : 'U.S. Federal', 'website' : 'www.inl.gov', 'rank' : 600, 'variable' : 'IM_background_image_binary_Prop', 'value' : 0.0453987730061349},
			{'web_category' : 'Alexa Rating', 'website' : 'www.intuit.com', 'rank' : 596, 'variable' : 'IM_background_image_binary_Prop', 'value' : 0.0480591497227356},
			{'web_category' : 'U.S. Federal', 'website' : 'www.lanl.gov', 'rank' : 592, 'variable' : 'IM_background_image_binary_Prop', 'value' : 0.0355160932297447},
			{'web_category' : 'U.S. Federal', 'website' : 'www.medicare.gov', 'rank' : 581, 'variable' : 'IM_background_image_binary_Prop', 'value' : 0.185770750988142},
			{'web_category' : 'U.S. Federal', 'website' : 'www.ncua.gov', 'rank' : 595, 'variable' : 'IM_background_image_binary_Prop', 'value' : 0.0463678516228748},
			{'web_category' : 'Google Autism Search', 'website' : 'www.pathfindersforau', 'rank' : 597, 'variable' : 'IM_background_image_binary_Prop', 'value' : 0.0167548500881834},
			{'web_category' : 'U.S. Federal', 'website' : 'www.pbgc.gov', 'rank' : 598, 'variable' : 'IM_background_image_binary_Prop', 'value' : 0.0553997194950911},
			{'web_category' : 'U.S. Federal', 'website' : 'www.presidio.gov', 'rank' : 589, 'variable' : 'IM_background_image_binary_Prop', 'value' : 0.00403225806451612},
			{'web_category' : 'U.S. Federal', 'website' : 'www.recreation.gov', 'rank' : 575, 'variable' : 'IM_background_image_binary_Prop', 'value' : 0.0632022471910112},
			{'web_category' : 'U.S. Federal', 'website' : 'www.science360.gov', 'rank' : 579, 'variable' : 'IM_background_image_binary_Prop', 'value' : 0.0136518771331058},
			{'web_category' : 'U.S. Federal', 'website' : 'www.selectusa.gov', 'rank' : 585, 'variable' : 'IM_background_image_binary_Prop', 'value' : 0.010703363914373},
			{'web_category' : 'Alexa Rating', 'website' : 'www.taobao.com', 'rank' : 593, 'variable' : 'IM_background_image_binary_Prop', 'value' : 0.00689289501590668},
			{'web_category' : 'Google Autism Search', 'website' : 'www.theautismproject', 'rank' : 599, 'variable' : 'IM_background_image_binary_Prop', 'value' : 0.095360824742268},
			{'web_category' : 'Alexa Rating', 'website' : 'www.tmall.com', 'rank' : 594, 'variable' : 'IM_background_image_binary_Prop', 'value' : 0.037037037037037},
			{'web_category' : 'U.S. Federal', 'website' : 'www.truman.gov', 'rank' : 588, 'variable' : 'IM_background_image_binary_Prop', 'value' : 0.0552884615384615},
			{'web_category' : 'Alexa Rating', 'website' : 'www.vimeo.com', 'rank' : 577, 'variable' : 'IM_background_image_binary_Prop', 'value' : 0.014903129657228},
			{'web_category' : 'Alexa Rating', 'website' : 'www.wikihow.com', 'rank' : 576, 'variable' : 'IM_background_image_binary_Prop', 'value' : 0.0818965517241379},
			{'web_category' : 'U.S. Federal', 'website' : 'www.acquisition.gov', 'rank' : 584, 'variable' : 'IM_background_size_binary_Prop', 'value' : 0.0097323600973236},
			{'web_category' : 'U.S. Federal', 'website' : 'www.aids.gov', 'rank' : 591, 'variable' : 'IM_background_size_binary_Prop', 'value' : 0.000731796560556165},
			{'web_category' : 'U.S. Federal', 'website' : 'www.arm.gov', 'rank' : 578, 'variable' : 'IM_background_size_binary_Prop', 'value' : 0.0053763440860215},
			{'web_category' : 'Google Autism Search', 'website' : 'www.audioeye.comaudi', 'rank' : 590, 'variable' : 'IM_background_size_binary_Prop', 'value' : 0.00453514739229025},
			{'web_category' : 'Alexa Rating', 'website' : 'www.bing.com', 'rank' : 583, 'variable' : 'IM_background_size_binary_Prop', 'value' : 0.0259740259740259},
			{'web_category' : 'Alexa Rating', 'website' : 'www.blogspot.com', 'rank' : 580, 'variable' : 'IM_background_size_binary_Prop', 'value' : 0.0111111111111111},
			{'web_category' : 'Alexa Rating', 'website' : 'www.cnn.com', 'rank' : 587, 'variable' : 'IM_background_size_binary_Prop', 'value' : 0.0137614678899082},
			{'web_category' : 'Alexa Rating', 'website' : 'www.discover.com', 'rank' : 582, 'variable' : 'IM_background_size_binary_Prop', 'value' : 0.0133819951338199},
			{'web_category' : 'U.S. Federal', 'website' : 'www.iaf.gov', 'rank' : 586, 'variable' : 'IM_background_size_binary_Prop', 'value' : 0.00294117647058823},
			{'web_category' : 'U.S. Federal', 'website' : 'www.inl.gov', 'rank' : 600, 'variable' : 'IM_background_size_binary_Prop', 'value' : 0.0159509202453987},
			{'web_category' : 'Alexa Rating', 'website' : 'www.intuit.com', 'rank' : 596, 'variable' : 'IM_background_size_binary_Prop', 'value' : 0.00184842883548983},
			{'web_category' : 'U.S. Federal', 'website' : 'www.lanl.gov', 'rank' : 592, 'variable' : 'IM_background_size_binary_Prop', 'value' : 0.00665926748057713},
			{'web_category' : 'U.S. Federal', 'website' : 'www.medicare.gov', 'rank' : 581, 'variable' : 'IM_background_size_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.ncua.gov', 'rank' : 595, 'variable' : 'IM_background_size_binary_Prop', 'value' : 0.0144255538382277},
			{'web_category' : 'Google Autism Search', 'website' : 'www.pathfindersforau', 'rank' : 597, 'variable' : 'IM_background_size_binary_Prop', 'value' : 0.00352733686067019},
			{'web_category' : 'U.S. Federal', 'website' : 'www.pbgc.gov', 'rank' : 598, 'variable' : 'IM_background_size_binary_Prop', 'value' : 0.0091164095371669},
			{'web_category' : 'U.S. Federal', 'website' : 'www.presidio.gov', 'rank' : 589, 'variable' : 'IM_background_size_binary_Prop', 'value' : 0.00806451612903225},
			{'web_category' : 'U.S. Federal', 'website' : 'www.recreation.gov', 'rank' : 575, 'variable' : 'IM_background_size_binary_Prop', 'value' : 0.0224719101123595},
			{'web_category' : 'U.S. Federal', 'website' : 'www.science360.gov', 'rank' : 579, 'variable' : 'IM_background_size_binary_Prop', 'value' : 0.00341296928327645},
			{'web_category' : 'U.S. Federal', 'website' : 'www.selectusa.gov', 'rank' : 585, 'variable' : 'IM_background_size_binary_Prop', 'value' : 0.00611620795107033},
			{'web_category' : 'Alexa Rating', 'website' : 'www.taobao.com', 'rank' : 593, 'variable' : 'IM_background_size_binary_Prop', 'value' : 0.00530222693531283},
			{'web_category' : 'Google Autism Search', 'website' : 'www.theautismproject', 'rank' : 599, 'variable' : 'IM_background_size_binary_Prop', 'value' : 0.00257731958762886},
			{'web_category' : 'Alexa Rating', 'website' : 'www.tmall.com', 'rank' : 594, 'variable' : 'IM_background_size_binary_Prop', 'value' : 0.00987654320987654},
			{'web_category' : 'U.S. Federal', 'website' : 'www.truman.gov', 'rank' : 588, 'variable' : 'IM_background_size_binary_Prop', 'value' : 0.00961538461538461},
			{'web_category' : 'Alexa Rating', 'website' : 'www.vimeo.com', 'rank' : 577, 'variable' : 'IM_background_size_binary_Prop', 'value' : 0.0067064083457526},
			{'web_category' : 'Alexa Rating', 'website' : 'www.wikihow.com', 'rank' : 576, 'variable' : 'IM_background_size_binary_Prop', 'value' : 0.021551724137931},
			{'web_category' : 'U.S. Federal', 'website' : 'www.acquisition.gov', 'rank' : 584, 'variable' : 'IM_filter_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.aids.gov', 'rank' : 591, 'variable' : 'IM_filter_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.arm.gov', 'rank' : 578, 'variable' : 'IM_filter_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.audioeye.comaudi', 'rank' : 590, 'variable' : 'IM_filter_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.bing.com', 'rank' : 583, 'variable' : 'IM_filter_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.blogspot.com', 'rank' : 580, 'variable' : 'IM_filter_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.cnn.com', 'rank' : 587, 'variable' : 'IM_filter_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.discover.com', 'rank' : 582, 'variable' : 'IM_filter_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.iaf.gov', 'rank' : 586, 'variable' : 'IM_filter_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.inl.gov', 'rank' : 600, 'variable' : 'IM_filter_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.intuit.com', 'rank' : 596, 'variable' : 'IM_filter_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.lanl.gov', 'rank' : 592, 'variable' : 'IM_filter_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.medicare.gov', 'rank' : 581, 'variable' : 'IM_filter_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.ncua.gov', 'rank' : 595, 'variable' : 'IM_filter_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.pathfindersforau', 'rank' : 597, 'variable' : 'IM_filter_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.pbgc.gov', 'rank' : 598, 'variable' : 'IM_filter_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.presidio.gov', 'rank' : 589, 'variable' : 'IM_filter_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.recreation.gov', 'rank' : 575, 'variable' : 'IM_filter_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.science360.gov', 'rank' : 579, 'variable' : 'IM_filter_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.selectusa.gov', 'rank' : 585, 'variable' : 'IM_filter_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.taobao.com', 'rank' : 593, 'variable' : 'IM_filter_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.theautismproject', 'rank' : 599, 'variable' : 'IM_filter_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.tmall.com', 'rank' : 594, 'variable' : 'IM_filter_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.truman.gov', 'rank' : 588, 'variable' : 'IM_filter_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.vimeo.com', 'rank' : 577, 'variable' : 'IM_filter_binary_Prop', 'value' : 0.0014903129657228},
			{'web_category' : 'Alexa Rating', 'website' : 'www.wikihow.com', 'rank' : 576, 'variable' : 'IM_filter_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.acquisition.gov', 'rank' : 584, 'variable' : 'IM_object_fit_binary_Prop', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.aids.gov', 'rank' : 591, 'variable' : 'IM_object_fit_binary_Prop', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.arm.gov', 'rank' : 578, 'variable' : 'IM_object_fit_binary_Prop', 'value' : 1},
			{'web_category' : 'Google Autism Search', 'website' : 'www.audioeye.comaudi', 'rank' : 590, 'variable' : 'IM_object_fit_binary_Prop', 'value' : 1},
			{'web_category' : 'Alexa Rating', 'website' : 'www.bing.com', 'rank' : 583, 'variable' : 'IM_object_fit_binary_Prop', 'value' : 1},
			{'web_category' : 'Alexa Rating', 'website' : 'www.blogspot.com', 'rank' : 580, 'variable' : 'IM_object_fit_binary_Prop', 'value' : 1},
			{'web_category' : 'Alexa Rating', 'website' : 'www.cnn.com', 'rank' : 587, 'variable' : 'IM_object_fit_binary_Prop', 'value' : 1},
			{'web_category' : 'Alexa Rating', 'website' : 'www.discover.com', 'rank' : 582, 'variable' : 'IM_object_fit_binary_Prop', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.iaf.gov', 'rank' : 586, 'variable' : 'IM_object_fit_binary_Prop', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.inl.gov', 'rank' : 600, 'variable' : 'IM_object_fit_binary_Prop', 'value' : 1},
			{'web_category' : 'Alexa Rating', 'website' : 'www.intuit.com', 'rank' : 596, 'variable' : 'IM_object_fit_binary_Prop', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.lanl.gov', 'rank' : 592, 'variable' : 'IM_object_fit_binary_Prop', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.medicare.gov', 'rank' : 581, 'variable' : 'IM_object_fit_binary_Prop', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.ncua.gov', 'rank' : 595, 'variable' : 'IM_object_fit_binary_Prop', 'value' : 1},
			{'web_category' : 'Google Autism Search', 'website' : 'www.pathfindersforau', 'rank' : 597, 'variable' : 'IM_object_fit_binary_Prop', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.pbgc.gov', 'rank' : 598, 'variable' : 'IM_object_fit_binary_Prop', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.presidio.gov', 'rank' : 589, 'variable' : 'IM_object_fit_binary_Prop', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.recreation.gov', 'rank' : 575, 'variable' : 'IM_object_fit_binary_Prop', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.science360.gov', 'rank' : 579, 'variable' : 'IM_object_fit_binary_Prop', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.selectusa.gov', 'rank' : 585, 'variable' : 'IM_object_fit_binary_Prop', 'value' : 1},
			{'web_category' : 'Alexa Rating', 'website' : 'www.taobao.com', 'rank' : 593, 'variable' : 'IM_object_fit_binary_Prop', 'value' : 1},
			{'web_category' : 'Google Autism Search', 'website' : 'www.theautismproject', 'rank' : 599, 'variable' : 'IM_object_fit_binary_Prop', 'value' : 1},
			{'web_category' : 'Alexa Rating', 'website' : 'www.tmall.com', 'rank' : 594, 'variable' : 'IM_object_fit_binary_Prop', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.truman.gov', 'rank' : 588, 'variable' : 'IM_object_fit_binary_Prop', 'value' : 1},
			{'web_category' : 'Alexa Rating', 'website' : 'www.vimeo.com', 'rank' : 577, 'variable' : 'IM_object_fit_binary_Prop', 'value' : 1},
			{'web_category' : 'Alexa Rating', 'website' : 'www.wikihow.com', 'rank' : 576, 'variable' : 'IM_object_fit_binary_Prop', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.acquisition.gov', 'rank' : 584, 'variable' : 'AN_animation_delay_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.aids.gov', 'rank' : 591, 'variable' : 'AN_animation_delay_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.arm.gov', 'rank' : 578, 'variable' : 'AN_animation_delay_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.audioeye.comaudi', 'rank' : 590, 'variable' : 'AN_animation_delay_binary_Prop', 'value' : 0.00226757369614512},
			{'web_category' : 'Alexa Rating', 'website' : 'www.bing.com', 'rank' : 583, 'variable' : 'AN_animation_delay_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.blogspot.com', 'rank' : 580, 'variable' : 'AN_animation_delay_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.cnn.com', 'rank' : 587, 'variable' : 'AN_animation_delay_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.discover.com', 'rank' : 582, 'variable' : 'AN_animation_delay_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.iaf.gov', 'rank' : 586, 'variable' : 'AN_animation_delay_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.inl.gov', 'rank' : 600, 'variable' : 'AN_animation_delay_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.intuit.com', 'rank' : 596, 'variable' : 'AN_animation_delay_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.lanl.gov', 'rank' : 592, 'variable' : 'AN_animation_delay_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.medicare.gov', 'rank' : 581, 'variable' : 'AN_animation_delay_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.ncua.gov', 'rank' : 595, 'variable' : 'AN_animation_delay_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.pathfindersforau', 'rank' : 597, 'variable' : 'AN_animation_delay_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.pbgc.gov', 'rank' : 598, 'variable' : 'AN_animation_delay_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.presidio.gov', 'rank' : 589, 'variable' : 'AN_animation_delay_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.recreation.gov', 'rank' : 575, 'variable' : 'AN_animation_delay_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.science360.gov', 'rank' : 579, 'variable' : 'AN_animation_delay_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.selectusa.gov', 'rank' : 585, 'variable' : 'AN_animation_delay_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.taobao.com', 'rank' : 593, 'variable' : 'AN_animation_delay_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.theautismproject', 'rank' : 599, 'variable' : 'AN_animation_delay_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.tmall.com', 'rank' : 594, 'variable' : 'AN_animation_delay_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.truman.gov', 'rank' : 588, 'variable' : 'AN_animation_delay_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.vimeo.com', 'rank' : 577, 'variable' : 'AN_animation_delay_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.wikihow.com', 'rank' : 576, 'variable' : 'AN_animation_delay_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.acquisition.gov', 'rank' : 584, 'variable' : 'AN_animation_duration_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.aids.gov', 'rank' : 591, 'variable' : 'AN_animation_duration_binary_Prop', 'value' : 0.000731796560556165},
			{'web_category' : 'U.S. Federal', 'website' : 'www.arm.gov', 'rank' : 578, 'variable' : 'AN_animation_duration_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.audioeye.comaudi', 'rank' : 590, 'variable' : 'AN_animation_duration_binary_Prop', 'value' : 0.00226757369614512},
			{'web_category' : 'Alexa Rating', 'website' : 'www.bing.com', 'rank' : 583, 'variable' : 'AN_animation_duration_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.blogspot.com', 'rank' : 580, 'variable' : 'AN_animation_duration_binary_Prop', 'value' : 0.0037037037037037},
			{'web_category' : 'Alexa Rating', 'website' : 'www.cnn.com', 'rank' : 587, 'variable' : 'AN_animation_duration_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.discover.com', 'rank' : 582, 'variable' : 'AN_animation_duration_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.iaf.gov', 'rank' : 586, 'variable' : 'AN_animation_duration_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.inl.gov', 'rank' : 600, 'variable' : 'AN_animation_duration_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.intuit.com', 'rank' : 596, 'variable' : 'AN_animation_duration_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.lanl.gov', 'rank' : 592, 'variable' : 'AN_animation_duration_binary_Prop', 'value' : 0.00332963374028856},
			{'web_category' : 'U.S. Federal', 'website' : 'www.medicare.gov', 'rank' : 581, 'variable' : 'AN_animation_duration_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.ncua.gov', 'rank' : 595, 'variable' : 'AN_animation_duration_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.pathfindersforau', 'rank' : 597, 'variable' : 'AN_animation_duration_binary_Prop', 'value' : 0.00705467372134038},
			{'web_category' : 'U.S. Federal', 'website' : 'www.pbgc.gov', 'rank' : 598, 'variable' : 'AN_animation_duration_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.presidio.gov', 'rank' : 589, 'variable' : 'AN_animation_duration_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.recreation.gov', 'rank' : 575, 'variable' : 'AN_animation_duration_binary_Prop', 'value' : 0.00280898876404494},
			{'web_category' : 'U.S. Federal', 'website' : 'www.science360.gov', 'rank' : 579, 'variable' : 'AN_animation_duration_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.selectusa.gov', 'rank' : 585, 'variable' : 'AN_animation_duration_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.taobao.com', 'rank' : 593, 'variable' : 'AN_animation_duration_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.theautismproject', 'rank' : 599, 'variable' : 'AN_animation_duration_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.tmall.com', 'rank' : 594, 'variable' : 'AN_animation_duration_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.truman.gov', 'rank' : 588, 'variable' : 'AN_animation_duration_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.vimeo.com', 'rank' : 577, 'variable' : 'AN_animation_duration_binary_Prop', 'value' : 0.0029806259314456},
			{'web_category' : 'Alexa Rating', 'website' : 'www.wikihow.com', 'rank' : 576, 'variable' : 'AN_animation_duration_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.acquisition.gov', 'rank' : 584, 'variable' : 'AN_animation_name_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.aids.gov', 'rank' : 591, 'variable' : 'AN_animation_name_binary_Prop', 'value' : 0.000731796560556165},
			{'web_category' : 'U.S. Federal', 'website' : 'www.arm.gov', 'rank' : 578, 'variable' : 'AN_animation_name_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.audioeye.comaudi', 'rank' : 590, 'variable' : 'AN_animation_name_binary_Prop', 'value' : 0.00226757369614512},
			{'web_category' : 'Alexa Rating', 'website' : 'www.bing.com', 'rank' : 583, 'variable' : 'AN_animation_name_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.blogspot.com', 'rank' : 580, 'variable' : 'AN_animation_name_binary_Prop', 'value' : 0.0037037037037037},
			{'web_category' : 'Alexa Rating', 'website' : 'www.cnn.com', 'rank' : 587, 'variable' : 'AN_animation_name_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.discover.com', 'rank' : 582, 'variable' : 'AN_animation_name_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.iaf.gov', 'rank' : 586, 'variable' : 'AN_animation_name_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.inl.gov', 'rank' : 600, 'variable' : 'AN_animation_name_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.intuit.com', 'rank' : 596, 'variable' : 'AN_animation_name_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.lanl.gov', 'rank' : 592, 'variable' : 'AN_animation_name_binary_Prop', 'value' : 0.00332963374028856},
			{'web_category' : 'U.S. Federal', 'website' : 'www.medicare.gov', 'rank' : 581, 'variable' : 'AN_animation_name_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.ncua.gov', 'rank' : 595, 'variable' : 'AN_animation_name_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.pathfindersforau', 'rank' : 597, 'variable' : 'AN_animation_name_binary_Prop', 'value' : 0.00705467372134038},
			{'web_category' : 'U.S. Federal', 'website' : 'www.pbgc.gov', 'rank' : 598, 'variable' : 'AN_animation_name_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.presidio.gov', 'rank' : 589, 'variable' : 'AN_animation_name_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.recreation.gov', 'rank' : 575, 'variable' : 'AN_animation_name_binary_Prop', 'value' : 0.00280898876404494},
			{'web_category' : 'U.S. Federal', 'website' : 'www.science360.gov', 'rank' : 579, 'variable' : 'AN_animation_name_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.selectusa.gov', 'rank' : 585, 'variable' : 'AN_animation_name_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.taobao.com', 'rank' : 593, 'variable' : 'AN_animation_name_binary_Prop', 'value' : 0},
			{'web_category' : 'Google Autism Search', 'website' : 'www.theautismproject', 'rank' : 599, 'variable' : 'AN_animation_name_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.tmall.com', 'rank' : 594, 'variable' : 'AN_animation_name_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.truman.gov', 'rank' : 588, 'variable' : 'AN_animation_name_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.vimeo.com', 'rank' : 577, 'variable' : 'AN_animation_name_binary_Prop', 'value' : 0.0029806259314456},
			{'web_category' : 'Alexa Rating', 'website' : 'www.wikihow.com', 'rank' : 576, 'variable' : 'AN_animation_name_binary_Prop', 'value' : 0},
			{'web_category' : 'U.S. Federal', 'website' : 'www.acquisition.gov', 'rank' : 584, 'variable' : 'AN_change_5_sec_Prop', 'value' : 0.341920833333},
			{'web_category' : 'U.S. Federal', 'website' : 'www.aids.gov', 'rank' : 591, 'variable' : 'AN_change_5_sec_Prop', 'value' : 0.30379375},
			{'web_category' : 'U.S. Federal', 'website' : 'www.arm.gov', 'rank' : 578, 'variable' : 'AN_change_5_sec_Prop', 'value' : 0.440104166667},
			{'web_category' : 'Google Autism Search', 'website' : 'www.audioeye.comaudi', 'rank' : 590, 'variable' : 'AN_change_5_sec_Prop', 'value' : 0.00290416666667},
			{'web_category' : 'Alexa Rating', 'website' : 'www.bing.com', 'rank' : 583, 'variable' : 'AN_change_5_sec_Prop', 'value' : 0.951647916667},
			{'web_category' : 'Alexa Rating', 'website' : 'www.blogspot.com', 'rank' : 580, 'variable' : 'AN_change_5_sec_Prop', 'value' : 0.957202083333},
			{'web_category' : 'Alexa Rating', 'website' : 'www.cnn.com', 'rank' : 587, 'variable' : 'AN_change_5_sec_Prop', 'value' : 0.80625},
			{'web_category' : 'Alexa Rating', 'website' : 'www.discover.com', 'rank' : 582, 'variable' : 'AN_change_5_sec_Prop', 'value' : 0.00010625},
			{'web_category' : 'U.S. Federal', 'website' : 'www.iaf.gov', 'rank' : 586, 'variable' : 'AN_change_5_sec_Prop', 'value' : 0.20064375},
			{'web_category' : 'U.S. Federal', 'website' : 'www.inl.gov', 'rank' : 600, 'variable' : 'AN_change_5_sec_Prop', 'value' : 0.767225},
			{'web_category' : 'Alexa Rating', 'website' : 'www.intuit.com', 'rank' : 596, 'variable' : 'AN_change_5_sec_Prop', 'value' : 0.709070833332999},
			{'web_category' : 'U.S. Federal', 'website' : 'www.lanl.gov', 'rank' : 592, 'variable' : 'AN_change_5_sec_Prop', 'value' : 0.60365},
			{'web_category' : 'U.S. Federal', 'website' : 'www.medicare.gov', 'rank' : 581, 'variable' : 'AN_change_5_sec_Prop', 'value' : 0.853633333333},
			{'web_category' : 'U.S. Federal', 'website' : 'www.ncua.gov', 'rank' : 595, 'variable' : 'AN_change_5_sec_Prop', 'value' : 0.296852083333},
			{'web_category' : 'Google Autism Search', 'website' : 'www.pathfindersforau', 'rank' : 597, 'variable' : 'AN_change_5_sec_Prop', 'value' : 0.757841666667},
			{'web_category' : 'U.S. Federal', 'website' : 'www.pbgc.gov', 'rank' : 598, 'variable' : 'AN_change_5_sec_Prop', 'value' : 0.9895125},
			{'web_category' : 'U.S. Federal', 'website' : 'www.presidio.gov', 'rank' : 589, 'variable' : 'AN_change_5_sec_Prop', 'value' : 0.261166666667},
			{'web_category' : 'U.S. Federal', 'website' : 'www.recreation.gov', 'rank' : 575, 'variable' : 'AN_change_5_sec_Prop', 'value' : 0.766997916667},
			{'web_category' : 'U.S. Federal', 'website' : 'www.science360.gov', 'rank' : 579, 'variable' : 'AN_change_5_sec_Prop', 'value' : 0.0000229166666667},
			{'web_category' : 'U.S. Federal', 'website' : 'www.selectusa.gov', 'rank' : 585, 'variable' : 'AN_change_5_sec_Prop', 'value' : 0.109916666667},
			{'web_category' : 'Alexa Rating', 'website' : 'www.taobao.com', 'rank' : 593, 'variable' : 'AN_change_5_sec_Prop', 'value' : 0.345902083333},
			{'web_category' : 'Google Autism Search', 'website' : 'www.theautismproject', 'rank' : 599, 'variable' : 'AN_change_5_sec_Prop', 'value' : 0.596922916666999},
			{'web_category' : 'Alexa Rating', 'website' : 'www.tmall.com', 'rank' : 594, 'variable' : 'AN_change_5_sec_Prop', 'value' : 0.65886875},
			{'web_category' : 'U.S. Federal', 'website' : 'www.truman.gov', 'rank' : 588, 'variable' : 'AN_change_5_sec_Prop', 'value' : 0.357433333333},
			{'web_category' : 'Alexa Rating', 'website' : 'www.vimeo.com', 'rank' : 577, 'variable' : 'AN_change_5_sec_Prop', 'value' : 0.921595833333},
			{'web_category' : 'Alexa Rating', 'website' : 'www.wikihow.com', 'rank' : 576, 'variable' : 'AN_change_5_sec_Prop', 'value' : 0.814847916667},
			{'web_category' : 'U.S. Federal', 'website' : 'www.acquisition.gov', 'rank' : 584, 'variable' : 'AN_change_5_sec_Bin', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.aids.gov', 'rank' : 591, 'variable' : 'AN_change_5_sec_Bin', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.arm.gov', 'rank' : 578, 'variable' : 'AN_change_5_sec_Bin', 'value' : 1},
			{'web_category' : 'Google Autism Search', 'website' : 'www.audioeye.comaudi', 'rank' : 590, 'variable' : 'AN_change_5_sec_Bin', 'value' : 1},
			{'web_category' : 'Alexa Rating', 'website' : 'www.bing.com', 'rank' : 583, 'variable' : 'AN_change_5_sec_Bin', 'value' : 1},
			{'web_category' : 'Alexa Rating', 'website' : 'www.blogspot.com', 'rank' : 580, 'variable' : 'AN_change_5_sec_Bin', 'value' : 1},
			{'web_category' : 'Alexa Rating', 'website' : 'www.cnn.com', 'rank' : 587, 'variable' : 'AN_change_5_sec_Bin', 'value' : 1},
			{'web_category' : 'Alexa Rating', 'website' : 'www.discover.com', 'rank' : 582, 'variable' : 'AN_change_5_sec_Bin', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.iaf.gov', 'rank' : 586, 'variable' : 'AN_change_5_sec_Bin', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.inl.gov', 'rank' : 600, 'variable' : 'AN_change_5_sec_Bin', 'value' : 1},
			{'web_category' : 'Alexa Rating', 'website' : 'www.intuit.com', 'rank' : 596, 'variable' : 'AN_change_5_sec_Bin', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.lanl.gov', 'rank' : 592, 'variable' : 'AN_change_5_sec_Bin', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.medicare.gov', 'rank' : 581, 'variable' : 'AN_change_5_sec_Bin', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.ncua.gov', 'rank' : 595, 'variable' : 'AN_change_5_sec_Bin', 'value' : 1},
			{'web_category' : 'Google Autism Search', 'website' : 'www.pathfindersforau', 'rank' : 597, 'variable' : 'AN_change_5_sec_Bin', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.pbgc.gov', 'rank' : 598, 'variable' : 'AN_change_5_sec_Bin', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.presidio.gov', 'rank' : 589, 'variable' : 'AN_change_5_sec_Bin', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.recreation.gov', 'rank' : 575, 'variable' : 'AN_change_5_sec_Bin', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.science360.gov', 'rank' : 579, 'variable' : 'AN_change_5_sec_Bin', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.selectusa.gov', 'rank' : 585, 'variable' : 'AN_change_5_sec_Bin', 'value' : 1},
			{'web_category' : 'Alexa Rating', 'website' : 'www.taobao.com', 'rank' : 593, 'variable' : 'AN_change_5_sec_Bin', 'value' : 1},
			{'web_category' : 'Google Autism Search', 'website' : 'www.theautismproject', 'rank' : 599, 'variable' : 'AN_change_5_sec_Bin', 'value' : 1},
			{'web_category' : 'Alexa Rating', 'website' : 'www.tmall.com', 'rank' : 594, 'variable' : 'AN_change_5_sec_Bin', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.truman.gov', 'rank' : 588, 'variable' : 'AN_change_5_sec_Bin', 'value' : 1},
			{'web_category' : 'Alexa Rating', 'website' : 'www.vimeo.com', 'rank' : 577, 'variable' : 'AN_change_5_sec_Bin', 'value' : 1},
			{'web_category' : 'Alexa Rating', 'website' : 'www.wikihow.com', 'rank' : 576, 'variable' : 'AN_change_5_sec_Bin', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.acquisition.gov', 'rank' : 584, 'variable' : 'FN_font_size_binary_Prop', 'value' : 0.951338199513382},
			{'web_category' : 'U.S. Federal', 'website' : 'www.aids.gov', 'rank' : 591, 'variable' : 'FN_font_size_binary_Prop', 'value' : 0.846688620563483},
			{'web_category' : 'U.S. Federal', 'website' : 'www.arm.gov', 'rank' : 578, 'variable' : 'FN_font_size_binary_Prop', 'value' : 0.908602150537634},
			{'web_category' : 'Google Autism Search', 'website' : 'www.audioeye.comaudi', 'rank' : 590, 'variable' : 'FN_font_size_binary_Prop', 'value' : 0.956916099773242},
			{'web_category' : 'Alexa Rating', 'website' : 'www.bing.com', 'rank' : 583, 'variable' : 'FN_font_size_binary_Prop', 'value' : 0.993506493506493},
			{'web_category' : 'Alexa Rating', 'website' : 'www.blogspot.com', 'rank' : 580, 'variable' : 'FN_font_size_binary_Prop', 'value' : 0.959259259259259},
			{'web_category' : 'Alexa Rating', 'website' : 'www.cnn.com', 'rank' : 587, 'variable' : 'FN_font_size_binary_Prop', 'value' : 0.942660550458715},
			{'web_category' : 'Alexa Rating', 'website' : 'www.discover.com', 'rank' : 582, 'variable' : 'FN_font_size_binary_Prop', 'value' : 0.957420924574209},
			{'web_category' : 'U.S. Federal', 'website' : 'www.iaf.gov', 'rank' : 586, 'variable' : 'FN_font_size_binary_Prop', 'value' : 0.941176470588235},
			{'web_category' : 'U.S. Federal', 'website' : 'www.inl.gov', 'rank' : 600, 'variable' : 'FN_font_size_binary_Prop', 'value' : 0.850306748466257},
			{'web_category' : 'Alexa Rating', 'website' : 'www.intuit.com', 'rank' : 596, 'variable' : 'FN_font_size_binary_Prop', 'value' : 0.955637707948244},
			{'web_category' : 'U.S. Federal', 'website' : 'www.lanl.gov', 'rank' : 592, 'variable' : 'FN_font_size_binary_Prop', 'value' : 0.992230854605993},
			{'web_category' : 'U.S. Federal', 'website' : 'www.medicare.gov', 'rank' : 581, 'variable' : 'FN_font_size_binary_Prop', 'value' : 0.97364953886693},
			{'web_category' : 'U.S. Federal', 'website' : 'www.ncua.gov', 'rank' : 595, 'variable' : 'FN_font_size_binary_Prop', 'value' : 0.995878413189077},
			{'web_category' : 'Google Autism Search', 'website' : 'www.pathfindersforau', 'rank' : 597, 'variable' : 'FN_font_size_binary_Prop', 'value' : 0.894179894179894},
			{'web_category' : 'U.S. Federal', 'website' : 'www.pbgc.gov', 'rank' : 598, 'variable' : 'FN_font_size_binary_Prop', 'value' : 0.952314165497896},
			{'web_category' : 'U.S. Federal', 'website' : 'www.presidio.gov', 'rank' : 589, 'variable' : 'FN_font_size_binary_Prop', 'value' : 0.814516129032258},
			{'web_category' : 'U.S. Federal', 'website' : 'www.recreation.gov', 'rank' : 575, 'variable' : 'FN_font_size_binary_Prop', 'value' : 0.910112359550561},
			{'web_category' : 'U.S. Federal', 'website' : 'www.science360.gov', 'rank' : 579, 'variable' : 'FN_font_size_binary_Prop', 'value' : 0.988054607508532},
			{'web_category' : 'U.S. Federal', 'website' : 'www.selectusa.gov', 'rank' : 585, 'variable' : 'FN_font_size_binary_Prop', 'value' : 0.845565749235474},
			{'web_category' : 'Alexa Rating', 'website' : 'www.taobao.com', 'rank' : 593, 'variable' : 'FN_font_size_binary_Prop', 'value' : 0.977730646871686},
			{'web_category' : 'Google Autism Search', 'website' : 'www.theautismproject', 'rank' : 599, 'variable' : 'FN_font_size_binary_Prop', 'value' : 0.914948453608247},
			{'web_category' : 'Alexa Rating', 'website' : 'www.tmall.com', 'rank' : 594, 'variable' : 'FN_font_size_binary_Prop', 'value' : 0.99753086419753},
			{'web_category' : 'U.S. Federal', 'website' : 'www.truman.gov', 'rank' : 588, 'variable' : 'FN_font_size_binary_Prop', 'value' : 0.951923076923076},
			{'web_category' : 'Alexa Rating', 'website' : 'www.vimeo.com', 'rank' : 577, 'variable' : 'FN_font_size_binary_Prop', 'value' : 0.978390461997019},
			{'web_category' : 'Alexa Rating', 'website' : 'www.wikihow.com', 'rank' : 576, 'variable' : 'FN_font_size_binary_Prop', 'value' : 0.99353448275862},
			{'web_category' : 'U.S. Federal', 'website' : 'www.acquisition.gov', 'rank' : 584, 'variable' : 'FN_mod_font_family_binary_Prop', 'value' : 0.559610705596107},
			{'web_category' : 'U.S. Federal', 'website' : 'www.aids.gov', 'rank' : 591, 'variable' : 'FN_mod_font_family_binary_Prop', 'value' : 0.90633004024881},
			{'web_category' : 'U.S. Federal', 'website' : 'www.arm.gov', 'rank' : 578, 'variable' : 'FN_mod_font_family_binary_Prop', 'value' : 0.448924731182795},
			{'web_category' : 'Google Autism Search', 'website' : 'www.audioeye.comaudi', 'rank' : 590, 'variable' : 'FN_mod_font_family_binary_Prop', 'value' : 0.959183673469387},
			{'web_category' : 'Alexa Rating', 'website' : 'www.bing.com', 'rank' : 583, 'variable' : 'FN_mod_font_family_binary_Prop', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.blogspot.com', 'rank' : 580, 'variable' : 'FN_mod_font_family_binary_Prop', 'value' : 1},
			{'web_category' : 'Alexa Rating', 'website' : 'www.cnn.com', 'rank' : 587, 'variable' : 'FN_mod_font_family_binary_Prop', 'value' : 0.279816513761467},
			{'web_category' : 'Alexa Rating', 'website' : 'www.discover.com', 'rank' : 582, 'variable' : 'FN_mod_font_family_binary_Prop', 'value' : 0.802919708029197},
			{'web_category' : 'U.S. Federal', 'website' : 'www.iaf.gov', 'rank' : 586, 'variable' : 'FN_mod_font_family_binary_Prop', 'value' : 0.78235294117647},
			{'web_category' : 'U.S. Federal', 'website' : 'www.inl.gov', 'rank' : 600, 'variable' : 'FN_mod_font_family_binary_Prop', 'value' : 0.942331288343558},
			{'web_category' : 'Alexa Rating', 'website' : 'www.intuit.com', 'rank' : 596, 'variable' : 'FN_mod_font_family_binary_Prop', 'value' : 0.669131238447319},
			{'web_category' : 'U.S. Federal', 'website' : 'www.lanl.gov', 'rank' : 592, 'variable' : 'FN_mod_font_family_binary_Prop', 'value' : 0.612652608213096},
			{'web_category' : 'U.S. Federal', 'website' : 'www.medicare.gov', 'rank' : 581, 'variable' : 'FN_mod_font_family_binary_Prop', 'value' : 0.0210803689064558},
			{'web_category' : 'U.S. Federal', 'website' : 'www.ncua.gov', 'rank' : 595, 'variable' : 'FN_mod_font_family_binary_Prop', 'value' : 0.913961875321999},
			{'web_category' : 'Google Autism Search', 'website' : 'www.pathfindersforau', 'rank' : 597, 'variable' : 'FN_mod_font_family_binary_Prop', 'value' : 0.791887125220458},
			{'web_category' : 'U.S. Federal', 'website' : 'www.pbgc.gov', 'rank' : 598, 'variable' : 'FN_mod_font_family_binary_Prop', 'value' : 0.487377279102384},
			{'web_category' : 'U.S. Federal', 'website' : 'www.presidio.gov', 'rank' : 589, 'variable' : 'FN_mod_font_family_binary_Prop', 'value' : 0.932459677419354},
			{'web_category' : 'U.S. Federal', 'website' : 'www.recreation.gov', 'rank' : 575, 'variable' : 'FN_mod_font_family_binary_Prop', 'value' : 0.112359550561797},
			{'web_category' : 'U.S. Federal', 'website' : 'www.science360.gov', 'rank' : 579, 'variable' : 'FN_mod_font_family_binary_Prop', 'value' : 0.709897610921501},
			{'web_category' : 'U.S. Federal', 'website' : 'www.selectusa.gov', 'rank' : 585, 'variable' : 'FN_mod_font_family_binary_Prop', 'value' : 0.964831804281345},
			{'web_category' : 'Alexa Rating', 'website' : 'www.taobao.com', 'rank' : 593, 'variable' : 'FN_mod_font_family_binary_Prop', 'value' : 0.89713679745493},
			{'web_category' : 'Google Autism Search', 'website' : 'www.theautismproject', 'rank' : 599, 'variable' : 'FN_mod_font_family_binary_Prop', 'value' : 0.940721649484536},
			{'web_category' : 'Alexa Rating', 'website' : 'www.tmall.com', 'rank' : 594, 'variable' : 'FN_mod_font_family_binary_Prop', 'value' : 0.619753086419753},
			{'web_category' : 'U.S. Federal', 'website' : 'www.truman.gov', 'rank' : 588, 'variable' : 'FN_mod_font_family_binary_Prop', 'value' : 0.644230769230769},
			{'web_category' : 'Alexa Rating', 'website' : 'www.vimeo.com', 'rank' : 577, 'variable' : 'FN_mod_font_family_binary_Prop', 'value' : 0.0029806259314456},
			{'web_category' : 'Alexa Rating', 'website' : 'www.wikihow.com', 'rank' : 576, 'variable' : 'FN_mod_font_family_binary_Prop', 'value' : 0.00107758620689655},
			{'web_category' : 'U.S. Federal', 'website' : 'www.acquisition.gov', 'rank' : 584, 'variable' : 'FN_text_rate_Prop', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.aids.gov', 'rank' : 591, 'variable' : 'FN_text_rate_Prop', 'value' : 0.988888652376593},
			{'web_category' : 'U.S. Federal', 'website' : 'www.arm.gov', 'rank' : 578, 'variable' : 'FN_text_rate_Prop', 'value' : 0.972229816818341},
			{'web_category' : 'Google Autism Search', 'website' : 'www.audioeye.comaudi', 'rank' : 590, 'variable' : 'FN_text_rate_Prop', 'value' : 0.997757081532314},
			{'web_category' : 'Alexa Rating', 'website' : 'www.bing.com', 'rank' : 583, 'variable' : 'FN_text_rate_Prop', 'value' : 1},
			{'web_category' : 'Alexa Rating', 'website' : 'www.blogspot.com', 'rank' : 580, 'variable' : 'FN_text_rate_Prop', 'value' : 0.988041456284879},
			{'web_category' : 'Alexa Rating', 'website' : 'www.cnn.com', 'rank' : 587, 'variable' : 'FN_text_rate_Prop', 'value' : 1},
			{'web_category' : 'Alexa Rating', 'website' : 'www.discover.com', 'rank' : 582, 'variable' : 'FN_text_rate_Prop', 'value' : 0.984850150618967},
			{'web_category' : 'U.S. Federal', 'website' : 'www.iaf.gov', 'rank' : 586, 'variable' : 'FN_text_rate_Prop', 'value' : 0.968297524521251},
			{'web_category' : 'U.S. Federal', 'website' : 'www.inl.gov', 'rank' : 600, 'variable' : 'FN_text_rate_Prop', 'value' : 0.964071281041356},
			{'web_category' : 'Alexa Rating', 'website' : 'www.intuit.com', 'rank' : 596, 'variable' : 'FN_text_rate_Prop', 'value' : 0.986416443252904},
			{'web_category' : 'U.S. Federal', 'website' : 'www.lanl.gov', 'rank' : 592, 'variable' : 'FN_text_rate_Prop', 'value' : 0.994342794336329},
			{'web_category' : 'U.S. Federal', 'website' : 'www.medicare.gov', 'rank' : 581, 'variable' : 'FN_text_rate_Prop', 'value' : 0.99496331982919},
			{'web_category' : 'U.S. Federal', 'website' : 'www.ncua.gov', 'rank' : 595, 'variable' : 'FN_text_rate_Prop', 'value' : 0.995711895133175},
			{'web_category' : 'Google Autism Search', 'website' : 'www.pathfindersforau', 'rank' : 597, 'variable' : 'FN_text_rate_Prop', 'value' : 0.974109392756559},
			{'web_category' : 'U.S. Federal', 'website' : 'www.pbgc.gov', 'rank' : 598, 'variable' : 'FN_text_rate_Prop', 'value' : 0.968728403593642},
			{'web_category' : 'U.S. Federal', 'website' : 'www.presidio.gov', 'rank' : 589, 'variable' : 'FN_text_rate_Prop', 'value' : 0.933054115144262},
			{'web_category' : 'U.S. Federal', 'website' : 'www.recreation.gov', 'rank' : 575, 'variable' : 'FN_text_rate_Prop', 'value' : 0.992052453804887},
			{'web_category' : 'U.S. Federal', 'website' : 'www.science360.gov', 'rank' : 579, 'variable' : 'FN_text_rate_Prop', 'value' : 0.998329993319973},
			{'web_category' : 'U.S. Federal', 'website' : 'www.selectusa.gov', 'rank' : 585, 'variable' : 'FN_text_rate_Prop', 'value' : 0.898899136076987},
			{'web_category' : 'Alexa Rating', 'website' : 'www.taobao.com', 'rank' : 593, 'variable' : 'FN_text_rate_Prop', 'value' : 0.999142599277978},
			{'web_category' : 'Google Autism Search', 'website' : 'www.theautismproject', 'rank' : 599, 'variable' : 'FN_text_rate_Prop', 'value' : 0.978444123314065},
			{'web_category' : 'Alexa Rating', 'website' : 'www.tmall.com', 'rank' : 594, 'variable' : 'FN_text_rate_Prop', 'value' : 0.999762018086625},
			{'web_category' : 'U.S. Federal', 'website' : 'www.truman.gov', 'rank' : 588, 'variable' : 'FN_text_rate_Prop', 'value' : 0.984519950821504},
			{'web_category' : 'Alexa Rating', 'website' : 'www.vimeo.com', 'rank' : 577, 'variable' : 'FN_text_rate_Prop', 'value' : 0.9533952302931},
			{'web_category' : 'Alexa Rating', 'website' : 'www.wikihow.com', 'rank' : 576, 'variable' : 'FN_text_rate_Prop', 'value' : 0.99764923778316},
			{'web_category' : 'U.S. Federal', 'website' : 'www.acquisition.gov', 'rank' : 584, 'variable' : 'FN_unique_font_gt_2_Bool', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.aids.gov', 'rank' : 591, 'variable' : 'FN_unique_font_gt_2_Bool', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.arm.gov', 'rank' : 578, 'variable' : 'FN_unique_font_gt_2_Bool', 'value' : 1},
			{'web_category' : 'Google Autism Search', 'website' : 'www.audioeye.comaudi', 'rank' : 590, 'variable' : 'FN_unique_font_gt_2_Bool', 'value' : 1},
			{'web_category' : 'Alexa Rating', 'website' : 'www.bing.com', 'rank' : 583, 'variable' : 'FN_unique_font_gt_2_Bool', 'value' : 1},
			{'web_category' : 'Alexa Rating', 'website' : 'www.blogspot.com', 'rank' : 580, 'variable' : 'FN_unique_font_gt_2_Bool', 'value' : 0},
			{'web_category' : 'Alexa Rating', 'website' : 'www.cnn.com', 'rank' : 587, 'variable' : 'FN_unique_font_gt_2_Bool', 'value' : 1},
			{'web_category' : 'Alexa Rating', 'website' : 'www.discover.com', 'rank' : 582, 'variable' : 'FN_unique_font_gt_2_Bool', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.iaf.gov', 'rank' : 586, 'variable' : 'FN_unique_font_gt_2_Bool', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.inl.gov', 'rank' : 600, 'variable' : 'FN_unique_font_gt_2_Bool', 'value' : 1},
			{'web_category' : 'Alexa Rating', 'website' : 'www.intuit.com', 'rank' : 596, 'variable' : 'FN_unique_font_gt_2_Bool', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.lanl.gov', 'rank' : 592, 'variable' : 'FN_unique_font_gt_2_Bool', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.medicare.gov', 'rank' : 581, 'variable' : 'FN_unique_font_gt_2_Bool', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.ncua.gov', 'rank' : 595, 'variable' : 'FN_unique_font_gt_2_Bool', 'value' : 1},
			{'web_category' : 'Google Autism Search', 'website' : 'www.pathfindersforau', 'rank' : 597, 'variable' : 'FN_unique_font_gt_2_Bool', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.pbgc.gov', 'rank' : 598, 'variable' : 'FN_unique_font_gt_2_Bool', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.presidio.gov', 'rank' : 589, 'variable' : 'FN_unique_font_gt_2_Bool', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.recreation.gov', 'rank' : 575, 'variable' : 'FN_unique_font_gt_2_Bool', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.science360.gov', 'rank' : 579, 'variable' : 'FN_unique_font_gt_2_Bool', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.selectusa.gov', 'rank' : 585, 'variable' : 'FN_unique_font_gt_2_Bool', 'value' : 1},
			{'web_category' : 'Alexa Rating', 'website' : 'www.taobao.com', 'rank' : 593, 'variable' : 'FN_unique_font_gt_2_Bool', 'value' : 1},
			{'web_category' : 'Google Autism Search', 'website' : 'www.theautismproject', 'rank' : 599, 'variable' : 'FN_unique_font_gt_2_Bool', 'value' : 1},
			{'web_category' : 'Alexa Rating', 'website' : 'www.tmall.com', 'rank' : 594, 'variable' : 'FN_unique_font_gt_2_Bool', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.truman.gov', 'rank' : 588, 'variable' : 'FN_unique_font_gt_2_Bool', 'value' : 1},
			{'web_category' : 'Alexa Rating', 'website' : 'www.vimeo.com', 'rank' : 577, 'variable' : 'FN_unique_font_gt_2_Bool', 'value' : 1},
			{'web_category' : 'Alexa Rating', 'website' : 'www.wikihow.com', 'rank' : 576, 'variable' : 'FN_unique_font_gt_2_Bool', 'value' : 1},
			{'web_category' : 'U.S. Federal', 'website' : 'www.acquisition.gov', 'rank' : 584, 'variable' : 'imageCat_Prop_Avg', 'value' : 0.0659975669099756},
			{'web_category' : 'U.S. Federal', 'website' : 'www.aids.gov', 'rank' : 591, 'variable' : 'imageCat_Prop_Avg', 'value' : 0.0643523600439077},
			{'web_category' : 'U.S. Federal', 'website' : 'www.arm.gov', 'rank' : 578, 'variable' : 'imageCat_Prop_Avg', 'value' : 0.0658788829151732},
			{'web_category' : 'Google Autism Search', 'website' : 'www.audioeye.comaudi', 'rank' : 590, 'variable' : 'imageCat_Prop_Avg', 'value' : 0.0636652809271857},
			{'web_category' : 'Alexa Rating', 'website' : 'www.bing.com', 'rank' : 583, 'variable' : 'imageCat_Prop_Avg', 'value' : 0.071518759018759},
			{'web_category' : 'Alexa Rating', 'website' : 'www.blogspot.com', 'rank' : 580, 'variable' : 'imageCat_Prop_Avg', 'value' : 0.0644804526748971},
			{'web_category' : 'Alexa Rating', 'website' : 'www.cnn.com', 'rank' : 587, 'variable' : 'imageCat_Prop_Avg', 'value' : 0.0646980122324159},
			{'web_category' : 'Alexa Rating', 'website' : 'www.discover.com', 'rank' : 582, 'variable' : 'imageCat_Prop_Avg', 'value' : 0.0687685861043525},
			{'web_category' : 'U.S. Federal', 'website' : 'www.iaf.gov', 'rank' : 586, 'variable' : 'imageCat_Prop_Avg', 'value' : 0.0683006535947712},
			{'web_category' : 'U.S. Federal', 'website' : 'www.inl.gov', 'rank' : 600, 'variable' : 'imageCat_Prop_Avg', 'value' : 0.0667603953646898},
			{'web_category' : 'Alexa Rating', 'website' : 'www.intuit.com', 'rank' : 596, 'variable' : 'imageCat_Prop_Avg', 'value' : 0.0669413637297186},
			{'web_category' : 'U.S. Federal', 'website' : 'www.lanl.gov', 'rank' : 592, 'variable' : 'imageCat_Prop_Avg', 'value' : 0.0657988037982488},
			{'web_category' : 'U.S. Federal', 'website' : 'www.medicare.gov', 'rank' : 581, 'variable' : 'imageCat_Prop_Avg', 'value' : 0.0799846288976723},
			{'web_category' : 'U.S. Federal', 'website' : 'www.ncua.gov', 'rank' : 595, 'variable' : 'imageCat_Prop_Avg', 'value' : 0.0678952716240196},
			{'web_category' : 'Google Autism Search', 'website' : 'www.pathfindersforau', 'rank' : 597, 'variable' : 'imageCat_Prop_Avg', 'value' : 0.0671173819321967},
			{'web_category' : 'U.S. Federal', 'website' : 'www.pbgc.gov', 'rank' : 598, 'variable' : 'imageCat_Prop_Avg', 'value' : 0.0920845021037868},
			{'web_category' : 'U.S. Federal', 'website' : 'www.presidio.gov', 'rank' : 589, 'variable' : 'imageCat_Prop_Avg', 'value' : 0.0636620743727598},
			{'web_category' : 'U.S. Federal', 'website' : 'www.recreation.gov', 'rank' : 575, 'variable' : 'imageCat_Prop_Avg', 'value' : 0.0699223626716604},
			{'web_category' : 'U.S. Federal', 'website' : 'www.science360.gov', 'rank' : 579, 'variable' : 'imageCat_Prop_Avg', 'value' : 0.0652019340159272},
			{'web_category' : 'U.S. Federal', 'website' : 'www.selectusa.gov', 'rank' : 585, 'variable' : 'imageCat_Prop_Avg', 'value' : 0.0665137614678899},
			{'web_category' : 'Alexa Rating', 'website' : 'www.taobao.com', 'rank' : 593, 'variable' : 'imageCat_Prop_Avg', 'value' : 0.0636414516319076},
			{'web_category' : 'Google Autism Search', 'website' : 'www.theautismproject', 'rank' : 599, 'variable' : 'imageCat_Prop_Avg', 'value' : 0.0734536082474226},
			{'web_category' : 'Alexa Rating', 'website' : 'www.tmall.com', 'rank' : 594, 'variable' : 'imageCat_Prop_Avg', 'value' : 0.0676097393689986},
			{'web_category' : 'U.S. Federal', 'website' : 'www.truman.gov', 'rank' : 588, 'variable' : 'imageCat_Prop_Avg', 'value' : 0.0682759081196581},
			{'web_category' : 'Alexa Rating', 'website' : 'www.vimeo.com', 'rank' : 577, 'variable' : 'imageCat_Prop_Avg', 'value' : 0.0653978307666832},
			{'web_category' : 'Alexa Rating', 'website' : 'www.wikihow.com', 'rank' : 576, 'variable' : 'imageCat_Prop_Avg', 'value' : 0.0697587404214559},
			{'web_category' : 'U.S. Federal', 'website' : 'www.acquisition.gov', 'rank' : 584, 'variable' : 'animationCat_Prop_Avg', 'value' : 0.2683841666666},
			{'web_category' : 'U.S. Federal', 'website' : 'www.aids.gov', 'rank' : 591, 'variable' : 'animationCat_Prop_Avg', 'value' : 0.261051468624222},
			{'web_category' : 'U.S. Federal', 'website' : 'www.arm.gov', 'rank' : 578, 'variable' : 'animationCat_Prop_Avg', 'value' : 0.2880208333334},
			{'web_category' : 'Google Autism Search', 'website' : 'www.audioeye.comaudi', 'rank' : 590, 'variable' : 'animationCat_Prop_Avg', 'value' : 0.201941377551021},
			{'web_category' : 'Alexa Rating', 'website' : 'www.bing.com', 'rank' : 583, 'variable' : 'animationCat_Prop_Avg', 'value' : 0.3903295833334},
			{'web_category' : 'Alexa Rating', 'website' : 'www.blogspot.com', 'rank' : 580, 'variable' : 'animationCat_Prop_Avg', 'value' : 0.392921898148081},
			{'web_category' : 'Alexa Rating', 'website' : 'www.cnn.com', 'rank' : 587, 'variable' : 'animationCat_Prop_Avg', 'value' : 0.361249999999999},
			{'web_category' : 'Alexa Rating', 'website' : 'www.discover.com', 'rank' : 582, 'variable' : 'animationCat_Prop_Avg', 'value' : 0.200021249999999},
			{'web_category' : 'U.S. Federal', 'website' : 'www.iaf.gov', 'rank' : 586, 'variable' : 'animationCat_Prop_Avg', 'value' : 0.24012875},
			{'web_category' : 'U.S. Federal', 'website' : 'www.inl.gov', 'rank' : 600, 'variable' : 'animationCat_Prop_Avg', 'value' : 0.353445},
			{'web_category' : 'Alexa Rating', 'website' : 'www.intuit.com', 'rank' : 596, 'variable' : 'animationCat_Prop_Avg', 'value' : 0.3418141666666},
			{'web_category' : 'U.S. Federal', 'website' : 'www.lanl.gov', 'rank' : 592, 'variable' : 'animationCat_Prop_Avg', 'value' : 0.322061853496115},
			{'web_category' : 'U.S. Federal', 'website' : 'www.medicare.gov', 'rank' : 581, 'variable' : 'animationCat_Prop_Avg', 'value' : 0.3707266666666},
			{'web_category' : 'U.S. Federal', 'website' : 'www.ncua.gov', 'rank' : 595, 'variable' : 'animationCat_Prop_Avg', 'value' : 0.2593704166666},
			{'web_category' : 'Google Autism Search', 'website' : 'www.pathfindersforau', 'rank' : 597, 'variable' : 'animationCat_Prop_Avg', 'value' : 0.354390202821936},
			{'web_category' : 'U.S. Federal', 'website' : 'www.pbgc.gov', 'rank' : 598, 'variable' : 'animationCat_Prop_Avg', 'value' : 0.3979025},
			{'web_category' : 'U.S. Federal', 'website' : 'www.presidio.gov', 'rank' : 589, 'variable' : 'animationCat_Prop_Avg', 'value' : 0.2522333333334},
			{'web_category' : 'U.S. Federal', 'website' : 'www.recreation.gov', 'rank' : 575, 'variable' : 'animationCat_Prop_Avg', 'value' : 0.354523178839018},
			{'web_category' : 'U.S. Federal', 'website' : 'www.science360.gov', 'rank' : 579, 'variable' : 'animationCat_Prop_Avg', 'value' : 0.200004583333333},
			{'web_category' : 'U.S. Federal', 'website' : 'www.selectusa.gov', 'rank' : 585, 'variable' : 'animationCat_Prop_Avg', 'value' : 0.221983333333399},
			{'web_category' : 'Alexa Rating', 'website' : 'www.taobao.com', 'rank' : 593, 'variable' : 'animationCat_Prop_Avg', 'value' : 0.2691804166666},
			{'web_category' : 'Google Autism Search', 'website' : 'www.theautismproject', 'rank' : 599, 'variable' : 'animationCat_Prop_Avg', 'value' : 0.3193845833334},
			{'web_category' : 'Alexa Rating', 'website' : 'www.tmall.com', 'rank' : 594, 'variable' : 'animationCat_Prop_Avg', 'value' : 0.33177375},
			{'web_category' : 'U.S. Federal', 'website' : 'www.truman.gov', 'rank' : 588, 'variable' : 'animationCat_Prop_Avg', 'value' : 0.2714866666666},
			{'web_category' : 'Alexa Rating', 'website' : 'www.vimeo.com', 'rank' : 577, 'variable' : 'animationCat_Prop_Avg', 'value' : 0.385511417039178},
			{'web_category' : 'Alexa Rating', 'website' : 'www.wikihow.com', 'rank' : 576, 'variable' : 'animationCat_Prop_Avg', 'value' : 0.3629695833334},
			{'web_category' : 'U.S. Federal', 'website' : 'www.acquisition.gov', 'rank' : 584, 'variable' : 'fontCat_Prop_Avg', 'value' : 0.877737226277372},
			{'web_category' : 'U.S. Federal', 'website' : 'www.aids.gov', 'rank' : 591, 'variable' : 'fontCat_Prop_Avg', 'value' : 0.935476828297222},
			{'web_category' : 'U.S. Federal', 'website' : 'www.arm.gov', 'rank' : 578, 'variable' : 'fontCat_Prop_Avg', 'value' : 0.832439174634692},
			{'web_category' : 'Google Autism Search', 'website' : 'www.audioeye.comaudi', 'rank' : 590, 'variable' : 'fontCat_Prop_Avg', 'value' : 0.978464213693736},
			{'web_category' : 'Alexa Rating', 'website' : 'www.bing.com', 'rank' : 583, 'variable' : 'fontCat_Prop_Avg', 'value' : 0.748376623376623},
			{'web_category' : 'Alexa Rating', 'website' : 'www.blogspot.com', 'rank' : 580, 'variable' : 'fontCat_Prop_Avg', 'value' : 0.736825178886034},
			{'web_category' : 'Alexa Rating', 'website' : 'www.cnn.com', 'rank' : 587, 'variable' : 'fontCat_Prop_Avg', 'value' : 0.805619266055045},
			{'web_category' : 'Alexa Rating', 'website' : 'www.discover.com', 'rank' : 582, 'variable' : 'fontCat_Prop_Avg', 'value' : 0.936297695805593},
			{'web_category' : 'U.S. Federal', 'website' : 'www.iaf.gov', 'rank' : 586, 'variable' : 'fontCat_Prop_Avg', 'value' : 0.922956734071489},
			{'web_category' : 'U.S. Federal', 'website' : 'www.inl.gov', 'rank' : 600, 'variable' : 'fontCat_Prop_Avg', 'value' : 0.939177329462793},
			{'web_category' : 'Alexa Rating', 'website' : 'www.intuit.com', 'rank' : 596, 'variable' : 'fontCat_Prop_Avg', 'value' : 0.902796347412117},
			{'web_category' : 'U.S. Federal', 'website' : 'www.lanl.gov', 'rank' : 592, 'variable' : 'fontCat_Prop_Avg', 'value' : 0.899806564288854},
			{'web_category' : 'U.S. Federal', 'website' : 'www.medicare.gov', 'rank' : 581, 'variable' : 'fontCat_Prop_Avg', 'value' : 0.747423306900644},
			{'web_category' : 'U.S. Federal', 'website' : 'www.ncua.gov', 'rank' : 595, 'variable' : 'fontCat_Prop_Avg', 'value' : 0.976388045911063},
			{'web_category' : 'Google Autism Search', 'website' : 'www.pathfindersforau', 'rank' : 597, 'variable' : 'fontCat_Prop_Avg', 'value' : 0.915044103039228},
			{'web_category' : 'U.S. Federal', 'website' : 'www.pbgc.gov', 'rank' : 598, 'variable' : 'fontCat_Prop_Avg', 'value' : 0.85210496204848},
			{'web_category' : 'U.S. Federal', 'website' : 'www.presidio.gov', 'rank' : 589, 'variable' : 'fontCat_Prop_Avg', 'value' : 0.920007480398969},
			{'web_category' : 'U.S. Federal', 'website' : 'www.recreation.gov', 'rank' : 575, 'variable' : 'fontCat_Prop_Avg', 'value' : 0.753631090979311},
			{'web_category' : 'U.S. Federal', 'website' : 'www.science360.gov', 'rank' : 579, 'variable' : 'fontCat_Prop_Avg', 'value' : 0.924070552937501},
			{'web_category' : 'U.S. Federal', 'website' : 'www.selectusa.gov', 'rank' : 585, 'variable' : 'fontCat_Prop_Avg', 'value' : 0.927324172398451},
			{'web_category' : 'Alexa Rating', 'website' : 'www.taobao.com', 'rank' : 593, 'variable' : 'fontCat_Prop_Avg', 'value' : 0.968502510901148},
			{'web_category' : 'Google Autism Search', 'website' : 'www.theautismproject', 'rank' : 599, 'variable' : 'fontCat_Prop_Avg', 'value' : 0.958528556601712},
			{'web_category' : 'Alexa Rating', 'website' : 'www.tmall.com', 'rank' : 594, 'variable' : 'fontCat_Prop_Avg', 'value' : 0.904261492175977},
			{'web_category' : 'U.S. Federal', 'website' : 'www.truman.gov', 'rank' : 588, 'variable' : 'fontCat_Prop_Avg', 'value' : 0.895168449243837},
			{'web_category' : 'Alexa Rating', 'website' : 'www.vimeo.com', 'rank' : 577, 'variable' : 'fontCat_Prop_Avg', 'value' : 0.733691579555391},
			{'web_category' : 'Alexa Rating', 'website' : 'www.wikihow.com', 'rank' : 576, 'variable' : 'fontCat_Prop_Avg', 'value' : 0.748065326687169},
			{'web_category' : 'U.S. Federal', 'website' : 'www.acquisition.gov', 'rank' : 584, 'variable' : 'final_metric', 'value' : 0.404039653284649},
			{'web_category' : 'U.S. Federal', 'website' : 'www.aids.gov', 'rank' : 591, 'variable' : 'final_metric', 'value' : 0.420293552321784},
			{'web_category' : 'U.S. Federal', 'website' : 'www.arm.gov', 'rank' : 578, 'variable' : 'final_metric', 'value' : 0.395446296961088},
			{'web_category' : 'Google Autism Search', 'website' : 'www.audioeye.comaudi', 'rank' : 590, 'variable' : 'final_metric', 'value' : 0.41469029072398},
			{'web_category' : 'Alexa Rating', 'website' : 'www.bing.com', 'rank' : 583, 'variable' : 'final_metric', 'value' : 0.403408321909594},
			{'web_category' : 'Alexa Rating', 'website' : 'www.blogspot.com', 'rank' : 580, 'variable' : 'final_metric', 'value' : 0.398075843236337},
			{'web_category' : 'Alexa Rating', 'website' : 'www.cnn.com', 'rank' : 587, 'variable' : 'final_metric', 'value' : 0.41052242609582},
			{'web_category' : 'Alexa Rating', 'website' : 'www.discover.com', 'rank' : 582, 'variable' : 'final_metric', 'value' : 0.401695843969982},
			{'web_category' : 'U.S. Federal', 'website' : 'www.iaf.gov', 'rank' : 586, 'variable' : 'final_metric', 'value' : 0.410462045888753},
			{'web_category' : 'U.S. Federal', 'website' : 'www.inl.gov', 'rank' : 600, 'variable' : 'final_metric', 'value' : 0.453127574942494},
			{'web_category' : 'Alexa Rating', 'website' : 'www.intuit.com', 'rank' : 596, 'variable' : 'final_metric', 'value' : 0.437183959269478},
			{'web_category' : 'U.S. Federal', 'website' : 'www.lanl.gov', 'rank' : 592, 'variable' : 'final_metric', 'value' : 0.429222407194406},
			{'web_category' : 'U.S. Federal', 'website' : 'www.medicare.gov', 'rank' : 581, 'variable' : 'final_metric', 'value' : 0.399378200821638},
			{'web_category' : 'U.S. Federal', 'website' : 'www.ncua.gov', 'rank' : 595, 'variable' : 'final_metric', 'value' : 0.434551244733894},
			{'web_category' : 'Google Autism Search', 'website' : 'www.pathfindersforau', 'rank' : 597, 'variable' : 'final_metric', 'value' : 0.445517229264453},
			{'web_category' : 'U.S. Federal', 'website' : 'www.pbgc.gov', 'rank' : 598, 'variable' : 'final_metric', 'value' : 0.447363988050755},
			{'web_category' : 'U.S. Federal', 'website' : 'www.presidio.gov', 'rank' : 589, 'variable' : 'final_metric', 'value' : 0.411967629368376},
			{'web_category' : 'U.S. Federal', 'website' : 'www.recreation.gov', 'rank' : 575, 'variable' : 'final_metric', 'value' : 0.392692210829996},
			{'web_category' : 'U.S. Federal', 'website' : 'www.science360.gov', 'rank' : 579, 'variable' : 'final_metric', 'value' : 0.396425690095587},
			{'web_category' : 'U.S. Federal', 'website' : 'www.selectusa.gov', 'rank' : 585, 'variable' : 'final_metric', 'value' : 0.405273755733247},
			{'web_category' : 'Alexa Rating', 'website' : 'www.taobao.com', 'rank' : 593, 'variable' : 'final_metric', 'value' : 0.433774793066552},
			{'web_category' : 'Google Autism Search', 'website' : 'www.theautismproject', 'rank' : 599, 'variable' : 'final_metric', 'value' : 0.450455582727511},
			{'web_category' : 'Alexa Rating', 'website' : 'www.tmall.com', 'rank' : 594, 'variable' : 'final_metric', 'value' : 0.434548327181658},
			{'web_category' : 'U.S. Federal', 'website' : 'www.truman.gov', 'rank' : 588, 'variable' : 'final_metric', 'value' : 0.411643674676698},
			{'web_category' : 'Alexa Rating', 'website' : 'www.vimeo.com', 'rank' : 577, 'variable' : 'final_metric', 'value' : 0.39486694245375},
			{'web_category' : 'Alexa Rating', 'website' : 'www.wikihow.com', 'rank' : 576, 'variable' : 'final_metric', 'value' : 0.393597883480675}
		];

		//originally this livd in donutChart() but we use it for lineChart too so its global now
		function finMetric(d) {
			if (d.variable == "final_metric"){
				return d.value;
			}
		};

		//==========================================================
		// DONUT CHART
		// this site shows how to include mouseovers and putting
		// your graphic into a function http://bl.ocks.org/diethardsteiner/3287802
		function donutChart(){
			var w = 400, h = 400,
				outerRadius = Math.min(w, h)/2,
				innerRadius = outerRadius*0.5,
				color = d3.scale.category20();

			//process the data: grouping and getting averages
			var averageFinal = d3.nest()
				.key(function(d) { return d.web_category; })
				.rollup(function(v) { return d3.mean(v, function(d) {return finMetric(d); }); })
				.entries(capData);
			// console.log(JSON.stringify(averageFinal));

			//add svg
			var svg = d3.select("#pieChart").append("svg")
				.attr("width", w)
				.attr("height", h)
				.attr("border", "1px solid")

			//add group to svg, call it donut
			var donut = svg.append("g")
				.attr("transform", "translate(" + w/2 + "," + h/2 + ")");

			//add the arc path
			var arc = d3.svg.arc()
				.outerRadius(outerRadius)
				.innerRadius(innerRadius);

			//setup the pie layout manager
			pie = d3.layout.pie()
				.sort(null)
				.value(function(d) {return d.values;})
				.padAngle(0.0);

			//linking data to donut
			path = donut.selectAll("path")
				.data(pie(averageFinal))
				.enter()
				.append("path")
				.attr("d", arc)
				.style("fill", function(d, i) {return color(i);});

			// Pie chart title			
			donut.append("svg:text")
				.attr("dy", ".35em")
				.attr("text-anchor", "middle")
				.text("Average Final Metric")
				.attr("class","title");

			//add mouseover functionality
			//need to setup these invisible arcs over all the pie slices with the functionality we want
			//we'll grab the topmost group of the svg (donut in this case)
			//link it to our data using pie (just like we did with the path variable above)
			var arcs = donut.selectAll("g.slice")     //this selects all <g> elements with class slice (there aren't any yet)
				.data(pie(averageFinal))                          //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties) 
				.enter()                            //this will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
				.append("svg:g")                //create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
				.attr("class", "slice")    //allow us to style things in the slices (like text)
				.on("mouseover", mouseover)
				.on("mouseout", mouseout)
				.on("click", up);

			//this does the tool tip, adds 
			arcs.append("svg:path")
				.attr("fill", function(d, i) { return color(i); } ) //set the color for each slice to be chosen from the color function defined above
				.attr("d", arc)     //this creates the actual SVG path using the associated data (pie) with the arc drawing function
				.append("svg:title") //mouseover title showing the figures
				.text(function(d) { return d.data.key + ": " + d3.format(".4f")(d.data.values); });

			function mouseover() {
				d3.select(this).select("path").transition()
					.duration(750)
					.attr("stroke","red")
					.attr("stroke-width", 1.5);
			}

			function mouseout() {
				d3.select(this).select("path").transition()
					.duration(750)
					.attr("stroke","blue")
					.attr("stroke-width", 1.5);
			}

			function up(d, i) {
				/* update bar chart when user selects piece of the pie chart */
				updateBarChart(d.data.key, color(i));
				updateLineChart(d.data.key, color(i));
				// console.log(d.data.key, color(i));
			}
		}

		donutChart();
// =============================================================
		// BAR CHART NOW
		function barChartInfo() {

			//setup margin and stuff in function since we'll need it whenever we update the bar chart

			var margin = {top: 30, right: 50, bottom: 50, left: 50},
				width = 500 - margin.left - margin.right,
				height = 250 - margin.top - margin.bottom,
				colorBar = d3.scale.category20(),
				barPadding = 1;

			return {margin : margin, 
				width : width, 
				height : height, 
				colorBar : colorBar, 
				barPadding : barPadding};
		}

		function barChart(){
			//setup margin, width height, color and bar padding
			//obtain the summary that we want: average of the three Cat_Prop_Avg
			//setup the scale for x and y
			//setup the axes for x and y
			//setup the svg canvas thing, create an initial group for everything in the svg
			//add the actual axes to the svg: 
				//forgo x-axis in favor of x-labels, place in group
				//add y-axis in it's own group
			//define the rule of the plot (i.e. how to map the data to the svg)
			//add a group to svg called plot to contain all the bars
			//draw the actual bars
			//add data labels to the bars (the values that they represent)
			//add title
			var basics = barChartInfo();
	
			var margin = basics.margin,
				width = basics.width,
				height = basics.height,
				colorBar = basics.colorBar,
				barPadding = basics.barPadding;

			//nesting and rolling up our data: returns dictionary with "key" and "values"
			function varMetric(d) {
				if (d.variable.match("Cat_Prop_Avg") == "Cat_Prop_Avg"){
					return d.value;
				}
			}
			function metCat(d) {
				if (d.variable.match("Cat_Prop_Avg") == "Cat_Prop_Avg"){
					return d.variable;
				}
			}
			var averageCat = d3.nest()
				.key(function(d) { return metCat(d); })
				.rollup(function(v) { return d3.mean(v, function(d) {return varMetric(d); }); })
				.entries(capData);
			averageCat.splice(0, 1);	//remove 1 element at position 0. It is the one with "key" : "undefinded" and no "values"
			// console.log(JSON.stringify(averageCat));

			var x = d3.scale.linear()
				.domain([0, averageCat.length])
				.range([0, width]);

			var y = d3.scale.linear()
				.domain([0, d3.max(averageCat, function(d) {return d.values; })])
				.range([height, 0]);

			var xAxis = d3.svg.axis()
			    .scale(x)
			    .orient("bottom");

			var yAxis = d3.svg.axis()
			    .scale(y)
			    .orient("left")
			    .ticks(10);

			var svg = d3.select("#barChart")
				.append("svg")
			    .attr("width", width + margin.left + margin.right)
			    .attr("height", height + margin.top + margin.bottom)
			    .attr("id","barChartPlot")
			    .append("g")
			    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			//adding the axes to the svg
			// Add x labels to chart
			
			var xLabels = svg
				.append("g")
				.attr("transform", "translate(" + margin.left + "," + (margin.top + height)  + ")");
			
			xLabels.selectAll("text.xAxis")
				.data(averageCat)
				.enter()
				.append("text")
				.text(function(d) { return d.key;})
				.attr("text-anchor", "middle")
				// Set x position to the left edge of each bar plus half the bar width
				.attr("x", function(d, i) {return (i * (width / averageCat.length)) + ((width / averageCat.length - barPadding) / 2); })
				.attr("y", 15)
				.attr("class", "xAxis")
				.attr("style", "font-size: 12; font-family: Helvetica, sans-serif");

			//add y-axis
			svg.append("g")
		    	.attr("class", "y axis")
		    	.attr("transform", "translate(" + (margin.left - 10) + "," + margin.top + ")")
		    	.call(yAxis)
		    		.selectAll(".tick text")
		    		.style("text-anchor", "end")
		    		.attr("x", -5)
		    		.attr("y", 0);

		    //add a group called plot to contain the actual bars
			var plot = svg
			    .append("g")
			    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
			            
			//draw the bars
			plot.selectAll("rect")
				.data(averageCat)
				.enter()
				.append("rect")
				// .filter(function(d) {return d.key != "undefined"; }) //why not use this? we need to filter out undefined in other places too
				.attr("x", function(d, i) {return x(i); })
				.attr("width", width / averageCat.length - barPadding)   
				.attr("y", function(d) {return y(d.values); })  
				.attr("height", function(d) {return height-y(d.values); })
				.attr("fill", "lightgrey");

			// Add y labels to plot
			plot.selectAll("text")
				.data(averageCat)
				.enter()
				.append("text")
				.text(function(d) {return d3.format(".4f")(d.values); })
				.attr("text-anchor", "middle")
				// Set x position to the left edge of each bar plus half the bar width
				.attr("x", function(d, i) {return (i * (width / averageCat.length)) + ((width / averageCat.length - barPadding) / 2); })
				.attr("y", function(d) {return y(d.values) - 10; })
				.attr("class", "yAxis")
				.attr("font-family", "sans-serif")
				.attr("font-size", "11px")
				.attr("fill", "white");

			//title
			svg.append("text")
				.attr("x", (width + margin.left + margin.right)/2)
				.attr("y", 5)
				.attr("class","title")				
				.attr("text-anchor", "middle")
				.text("Category Averages");
		}

		barChart();
// ------------------------------------------------------------
//updating bar chart on click of the pie
		function updateBarChart(group, colorChosen) {
			//outline
			//get the chart layout info
			//process the data again, this time filtering for the group
			//set the x scale and y scale again now according to the filtered data
			//grab our svg and the plot group within it, link filtered data to it using .datum
			//select all the rectangles and update their heights with the new values.
			//	we assume no shapes need to be removed and that every group has values for each category
			//update the y-value text on the plots
			//update title


			//get layout info
			var basics = barChartInfo();
	
			var margin = basics.margin,
				width = basics.width,
				height = basics.height,
				colorBar = basics.colorBar,
				barPadding = basics.barPadding;

			//pretty much the same as the original but now with group, i suppose we could consolidate into one func with optional group param but w/e
			function varMetric(d, group) {
				if (d.variable.match("Cat_Prop_Avg") == "Cat_Prop_Avg" & d.web_category == group){
					return d.value;
				}
			}
			function metCat(d, group) {
				if (d.variable.match("Cat_Prop_Avg") == "Cat_Prop_Avg" & d.web_category == group){
					return d.variable;
				}
			}
			var averageCat = d3.nest()
				.key(function(d) { return metCat(d, group); })
				.rollup(function(v) { return d3.mean(v, function(d) {return varMetric(d, group); }); })
				.entries(capData);
			averageCat.splice(0, 1);	//remove 1 element at position 0. It is the one with "key" : "undefinded" and no "values"
			// console.log(JSON.stringify(averageCat));

			//now update the bar chart
			var x = d3.scale.linear()
				.domain([0, averageCat.length])
				.range([0, width]);

			var y = d3.scale.linear()
				.domain([0, d3.max(averageCat, function(d) {return d.values; })])
				.range([height, 0]);
		     
			//select our current svg in the #barChart div
			var svg = d3.select("#barChart svg");
		      
			var plot = d3.select("#barChartPlot")
				.datum(averageCat);
		
		  	/* Note that here we only have to select the elements - no more appending! */
		  	plot.selectAll("rect")
		    	.data(averageCat)
		    	.transition().duration(750)
				.attr("x", function(d, i) { return x(i); })
				.attr("width", width / averageCat.length - barPadding)   
				.attr("y", function(d) { return y(d.values); })
				.attr("height", function(d) { return height-y(d.values); })
				.attr("fill", colorChosen);
			
			plot.selectAll("text.yAxis") // target the text element(s) which has a yAxis class defined
				.data(averageCat)
				.transition()
				.duration(750)
				.attr("text-anchor", "middle")
				.attr("x", function(d, i) {
					return (i * (width / averageCat.length)) + ((width / averageCat.length - barPadding) / 2);
				})
				.attr("y", function(d) { return y(d.values) - 10; })
				.text(function(d) {return d3.format(".4f")(d.values); })
				.attr("class", "yAxis");
			

			svg.selectAll("text.title") // target the text element(s) which has a title class defined
				.attr("x", (width + margin.left + margin.right)/2)
				.attr("y", 5)
				.attr("class","title")				
				.attr("text-anchor", "middle")
				.text(group + "'s Category Averages")
			;
		}

// =============================================================
		// LINE CHART NOW
		// Line showing how final metric value changes with rank

		var xs = {'min': 0, 'max':0}; //make global so we can keep the same x-axis scale while updating

		function lineChartInfo() {

			var margin = {top: 20, right: 10, bottom: 50, left: 90},
			    width = 500 - margin.left - margin.right,
			    height = 200 - margin.top - margin.bottom;

			return {margin : margin, 
				width : width, 
				height : height};
		}

		function lineChart(){
			var basics = lineChartInfo();

			var margin = basics.margin,
				width = basics.width,
				height = basics.height;

			// getting the final metric values for each rank
			var rankFinal = d3.nest()
				.key(function(d) { return d.rank; })
				.rollup(function(v) { return d3.mean(v, function(d) {return finMetric(d); }); })
				.entries(capData);

			// Set the x and y scales
			xs.min = d3.min(rankFinal, function(d) { return d.key; }) 
			xs.max = d3.max(rankFinal, function(d) { return d.key; })
			var x = d3.scale.linear()
			    .domain([xs.min, xs.max])
			    .range([0, width]);

			var y = d3.scale.linear()
			    .domain([d3.min(rankFinal, function(d) { return d.values; }), 
			    		 d3.max(rankFinal, function(d) { return d.values; })])
				.range([height, 0])
				.clamp(true);

			//setup the x and y axes
			var xAxis = d3.svg.axis()
			    .scale(x)
			    .orient("bottom");

			var yAxis = d3.svg.axis()
			    .scale(y)
			    .orient("left")
			    .ticks(6);

			// Define the line
			var valueline = d3.svg.line()
			    .x(function(d) { return x(d.key); })
			    .y(function(d) { return y(d.values); })
			    .interpolate("basis");

			//add the svg to the lineChart div
			var svg = d3.select("#lineChart").append("svg")
			    .attr("width", width + margin.left + margin.right)
			    .attr("height", height + margin.top + margin.bottom)
				.append("g")
			    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
			    .attr("id", "lineChartPlot");

		    // Add the X Axis
		    svg.append("g")
		        .attr("class", "x axis")
		        .attr("transform", "translate(0," + height + ")")
		        .call(xAxis);

		    // Add the Y Axis
		    svg.append("g")
		        .attr("class", "y axis")
		        .call(yAxis)
		    		.selectAll(".tick text")
		    		.style("text-anchor", "end")
		    		.attr("x", -5)
		    		.attr("y", 0);

		    // Add the valueline path.
		    svg.append("path")
		        .attr("class", "line")
		        .attr("id", "linepath")
		    	.attr("stroke", "#aaaaaa")
		        .attr("stroke-width", "10px")
		    	.transition().duration(2000)
		        .attr("d", valueline(rankFinal))
		        .attr("stroke-width", "2px")
		        .attr("stroke", "orange")
			    .attr("fill", "none");

		    //title
			svg.append("text")
				.attr("x", (width + margin.left + margin.right)/2 - 35)
				.attr("y", -10)
				.attr("class","title")				
				.attr("text-anchor", "middle")
				.text("Final Metric by Rank");
		}

		lineChart();

//---------------------------------------------------------------------
//updating line chart
		function updateLineChart(group, colorChosen) {

			//layout info
			var basics = lineChartInfo();
			
			var margin = basics.margin,
				width = basics.width,
				height = basics.height;

			//process/filter the data

			// function filtGroup(d, group){
			// 	if (d.web_category == group){
			// 		return d.rank;
			// 	}
			// }

			var rankFinal = d3.nest()
				.key(function(d) { 
					if (d.web_category == group){
						return d.rank;
					}
				})
				.rollup(function(v) { return d3.mean(v, function(d) {
						return finMetric(d);
					}); 
				})
				.entries(capData);
			//drop the last element since it has key = undefined
			rankFinal.splice(rankFinal.length - 1, 1)
			 // console.log(rankFinal);

			var x = d3.scale.linear()
			    .domain([xs.min, xs.max])
			    .range([0, width]);

			var y = d3.scale.linear()
				.domain([0, d3.max(rankFinal, function(d) { return d.values; })])
				.range([height, 0]);

			// Define the line
			var valueline = d3.svg.line()
			    .x(function(d) { return x(d.key); })
			    .y(function(d) { return y(d.values); })
			    .interpolate("basis");

			var plot = d3.select("#lineChartPlot")
				.datum(rankFinal);

		    // Add the valueline path.
		    plot.select("#linepath")
				.transition()
				.duration(750)	
		        .attr("class", "line")
				.attr("d", valueline)
				// add color
				.attr("stroke", colorChosen);

		    //title
			// plot.selectAll("title")
				// .attr("x", (width + margin.left + margin.right)/2 - 35)
				// .attr("y", -10)
				// .attr("class","title")				
				// .attr("text-anchor", "middle")
				// .text("Final Metric by Rank: " + group);
			plot.selectAll("text.title") // target the text element(s) which has a title class defined
				.attr("x", (width + margin.left + margin.right)/2 - 35)
				.attr("y", -10)
				.attr("class","title")				
				.attr("text-anchor", "middle")
				.text("Final Metric by Rank: " + group);

		}