package fr.gfi.skeleton.util.context;

import java.util.Iterator;
import java.util.Map.Entry;
import java.util.Set;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import org.apache.log4j.Logger;



public class SkeletonListener implements ServletContextListener {

	/**
	 * Instance de Logger pour la journalisation de la classe
	 */
	private static final Logger LOG = Logger.getLogger(SkeletonListener.class);

	/**
	 * {@link ServletContext}.
	 */
	private static ServletContext servletContext;

	/**
	 * Renvoie un objet {@link ServletContext}.
	 *
	 * @return {@link ServletContext}
	 */
	public static ServletContext getContext() {
		return servletContext;
	}

	/**
	 * Modifie le {@link ServletContext}.
	 *
	 * @param servletContextEvent
	 *            {@link ServletContextEvent}
	 */
	public static void setContext(final ServletContextEvent servletContextEvent) {
		servletContext = servletContextEvent.getServletContext();
	}

	/**
	 * {@inheritDoc}
	 */
	public void contextInitialized(ServletContextEvent arg0) {

		// TODO Auto-generated method stub
		// Mettre ici tous les tests à établir au chargement de l'application
		LOG.info("Starting Skeleton");
		
		Set<Entry<Object, Object>> entries = System.getProperties().entrySet();
		Iterator<Entry<Object, Object>> entryIter = entries.iterator();

		while (entryIter.hasNext()) {
			Entry<Object, Object> entry = entryIter.next();
			Object key = entry.getKey();
			Object value = entry.getValue();
			LOG.info(key + " = " + value);
		}
		
		
	}

	/**
	 * {@inheritDoc}
	 */
	public void contextDestroyed(ServletContextEvent arg0) {
		// TODO Auto-generated method stub

	}

}
